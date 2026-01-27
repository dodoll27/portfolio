import { NextResponse } from "next/server";
import { getGitHubActivity } from "../../../packages/github";

export async function GET() {
  try {
    const data = await getGitHubActivity();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
