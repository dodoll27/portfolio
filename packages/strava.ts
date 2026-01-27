const STRAVA_TOKEN_URL = 'https://www.strava.com/oauth/token';

async function getAccessToken(): Promise<string> {
  const res = await fetch(STRAVA_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!res.ok) {
    throw new Error(`Token refresh failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function stravaFetch(endpoint: string) {
  const accessToken = await getAccessToken();
  const res = await fetch(`https://www.strava.com/api/v3${endpoint}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Strava API error: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

async function getAthlete() {
  return stravaFetch('/athlete');
}

async function getActivities() {
  const athlete = await stravaFetch('/athlete');
  const stats = await stravaFetch(`/athletes/${athlete.id}/stats`);
  const distance = stats.ytd_run_totals?.distance;
  const ytdDistance = distance !== undefined ? distance / 1000 : 0;
  return { activities: stats, ytdDistance };
}

export { getAthlete, getActivities };