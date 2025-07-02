import { NextResponse } from "next/server";
import { profileQuery } from "@/lib/sanity.query";
import { sanityFetch } from "@/lib/sanity.client";
import type { ProfileType } from "@/types";

export async function GET() {
  try {
    const profile: ProfileType = await sanityFetch({
      query: profileQuery,
      tags: ["profile"],
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
} 