import axios from "axios"
import * as cheerio from "cheerio"
import type { PluginEndpoint } from "@/lib/plugin-types"

async function threadsStalk(username: string) {
  const cleanUsername = username.replace(/^@/, "").trim()
  const url = `https://www.threads.com/@${cleanUsername}`

  const { data: html } = await axios.get<string>(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  })

  const $ = cheerio.load(html)

  const getMeta = (prop: string) =>
    $(`meta[property="${prop}"]`).attr("content") ||
    $(`meta[name="${prop}"]`).attr("content") ||
    ""

  const title = getMeta("og:title") || $("title").text().trim()
  const description = getMeta("og:description") || getMeta("description")
  const avatar = getMeta("og:image")
  const profileUrl = getMeta("og:url") || url

  const nameMatch = title.match(/^(.+?)\s*\(@/)
  const name = nameMatch ? nameMatch[1].trim() : cleanUsername

  const followersMatch = description.match(/([\d.,]+[KkMm]?)\s*Followers/i)
  const threadsMatch = description.match(/([\d.,]+[KkMm]?)\s*Threads/i)

  let bio = description
    .replace(/[\d.,]+[KkMm]?\s*Followers\s*[•·]\s*/i, "")
    .replace(/[\d.,]+[KkMm]?\s*Threads\s*[•·]\s*/i, "")
    .replace(/\.\s*See the latest conversations.*/i, "")
    .trim()

  if (!bio) bio = "-"

  const followers = followersMatch ? followersMatch[1] : "0"
  const threads = threadsMatch ? threadsMatch[1] : "0"

  const fakeId = Buffer.from(cleanUsername).toString("hex").slice(0, 12)

  return {
    username: cleanUsername,
    name,
    userId: fakeId,
    followers,
    following: "0",
    threads,
    media_count: Number.parseInt(threads) || 0,
    bio,
    external_url: "-",
    is_verified: false,
    is_private: false,
    is_business: false,
    avatar: avatar || "-",
    url: profileUrl,
  }
}

const endpoint: PluginEndpoint = {
  title: "Threads Stalk",
  slug: "threads",
  category: "stalk",
  icon: "UserSearch",
  method: "GET",
  path: "/api/stalk/threads",
  description: "Mengambil informasi publik akun Threads berdasarkan username.",
  tags: ["threads", "stalk", "profile"],
  parameters: [
    {
      name: "username",
      type: "string",
      required: true,
      description: "Username Threads tanpa @",
      example: "mrchllabimanyu",
    },
  ],

  async run(params) {
    const username = params.username?.trim()

    if (!username) {
      return {
        status: false,
        code: 400,
        message: "Parameter username wajib diisi",
      }
    }

    const result = await threadsStalk(username)

    return {
      status: true,
      code: 200,
      creator: "Com1",
      result,
    }
  },
}

export default endpoint
