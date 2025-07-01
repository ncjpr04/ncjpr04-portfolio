import { hookSecret } from "@/lib/env.api";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Check if hookSecret is available
    if (!hookSecret) {
      return new Response("Hook secret not configured", { status: 500 });
    }

    // Only import parseBody when needed to avoid build-time issues
    const { parseBody } = await import("next-sanity/webhook");
    
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, hookSecret);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
