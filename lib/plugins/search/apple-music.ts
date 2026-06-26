import axios from "axios"
import * as cheerio from "cheerio"
import type { PluginEndpoint } from "@/lib/plugin-types"

const client = axios.create({
  baseURL: "https://music.apple.com",
  timeout: 30000,
  headers: {
    authority: "music.apple.com",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
    "cache-control": "no-cache",
    pragma: "no-cache",
    referer: "https://music.apple.com/",
    "sec-ch-ua":
      '"Chromium";v="148", "Google Chrome";v="148", "Not:A-Brand";v="99"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36",
  },
})

async function appleMusicSearch(query: string, limit = 5) {
  const { data } = await client.get<string>("/us/search", {
    params: {
      term: query,
    },
  })

  const $ = cheerio.load(data)
  const results: any[] = []

  $('div[aria-label="Songs"] .track-lockup')
    .slice(0, limit)
    .each((_, el) => {
      const item = $(el)

      const title = item.find(".track-lockup__title a").text().trim() || null
      const link = item.find(".track-lockup__title a").attr("href") || null

      const artists = item
        .find(".track-lockup__subtitle a")
        .map((_, artist) => $(artist).text().trim())
        .get()
        .filter(Boolean)

      const explicit = item.find('[data-testid="explicit-badge"]').length > 0

      const rawCover =
        item
          .find('picture source[type="image/webp"]')
          .attr("srcset")
          ?.split(" ")[0] || null

      const cover = rawCover ? rawCover.replace(/\/\d+x\d+/, "/600x600") : null

      if (!title && !link) return

      results.push({
        title,
        artist: artists.join(", "),
        explicit,
        cover,
        url: link,
      })
    })

  return {
    total: results.length,
    results,
  }
}

const endpoint: PluginEndpoint = {
  title: "Apple Music Search",
  slug: "apple-music",
  category: "search",
  icon: "Music",
  method: "GET",
  bodyType: "query",
  path: "/api/search/apple-music",
  description: "Mencari lagu di Apple Music berdasarkan query.",
  tags: ["search", "apple-music", "music", "song"],

  parameters: [
    {
      name: "query",
      type: "text",
      required: true,
      description: "Judul lagu atau nama artis yang ingin dicari.",
      example: "Tame Impala",
    },
    {
      name: "limit",
      type: "number",
      required: false,
      description: "Jumlah hasil yang ingin ditampilkan. Default 5, maksimal 20.",
      example: "5",
    },
  ],

  async run(params) {
    const query = String(params.query || params.q || "").trim()
    const limitRaw = String(params.limit || "5").trim()

    const limitNumber = Number(limitRaw)
    const limit = Number.isFinite(limitNumber)
      ? Math.min(Math.max(limitNumber, 1), 20)
      : 5

    if (!query) {
      return {
        status: false,
        code: 400,
        message: "Parameter query wajib diisi",
      }
    }

    try {
      const result = await appleMusicSearch(query, limit)

      return {
        status: true,
        author: "COM1 - Mrchlldev",
        code: 200,
        result,
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Internal Server Error"

      return {
        status: false,
        code: 500,
        message,
      }
    }
  },
}

export default endpoint
