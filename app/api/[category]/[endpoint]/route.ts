import { NextRequest, NextResponse } from 'next/server'
import { findPlugin } from '@/lib/generated-plugins'

type Ctx = {
  params: Promise<{
    category: string
    endpoint: string
  }>
}

function bad(message: string, status = 400) {
  return NextResponse.json(
    {
      status: false,
      code: status,
      message
    },
    { status }
  )
}

async function execute(req: NextRequest, ctx: Ctx) {
  try {
    const params = await ctx.params
    const plugin = findPlugin(params.category, params.endpoint)

    if (!plugin) {
      return bad('Endpoint not found', 404)
    }

    if (req.method !== plugin.method) {
      return bad(`Method ${req.method} not allowed. Use ${plugin.method}.`, 405)
    }

    let input: Record<string, any> = {}

    if (plugin.method === 'GET') {
      input = Object.fromEntries(req.nextUrl.searchParams.entries())
    } else if (plugin.bodyType === 'json') {
      input = await req.json().catch(() => ({}))
    } else if (plugin.bodyType === 'form-data') {
      const form = await req.formData()
      let sizeError: string | null = null

      form.forEach((value, key) => {
        if (value instanceof File) {
          const meta = plugin.parameters.find((p: any) => p.name === key)
          const max = meta?.maxSizeMB || 10

          if (value.size > max * 1024 * 1024) {
            sizeError = `${key} exceeds maximum size ${max}MB`
            return
          }

          input[key] = value
        } else {
          input[key] = value
        }
      })

      if (sizeError) {
        return bad(sizeError, 413)
      }
    } else {
      input = Object.fromEntries(req.nextUrl.searchParams.entries())
    }

    for (const p of plugin.parameters) {
      if (
        p.required &&
        (
          input[p.name] === undefined ||
          input[p.name] === null ||
          input[p.name] === ''
        )
      ) {
        return bad(`Parameter ${p.name} is required`, 400)
      }
    }

    const result = await plugin.run(input)
    const status = result?.code && result.code >= 400 ? result.code : 200

    return NextResponse.json(result, { status })
  } catch (e) {
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: e instanceof Error ? e.message : 'Internal Server Error'
      },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest, ctx: Ctx) {
  return execute(req, ctx)
}

export async function POST(req: NextRequest, ctx: Ctx) {
  return execute(req, ctx)
}
