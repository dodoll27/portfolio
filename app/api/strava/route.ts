import { NextResponse } from "next/server";
import { getActivities } from "../../../packages/strava";

export async function GET() {
  try {
    const data = await getActivities();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Strava data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Strava data" },
      { status: 500 }
    );
  }
}
