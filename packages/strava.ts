import { Strava } from 'strava-api-v3';
import 'dotenv/config'; 

const stravaApi = new Strava({
  accessToken: process.env.STRAVA_ACCESS_TOKEN!,
  clientId: process.env.STRAVA_CLIENT_ID!,
  clientSecret: process.env.STRAVA_CLIENT_SECRET!,
  refreshToken: process.env.STRAVA_REFRESH_TOKEN!,
});

async function getAthlete() {
  try {
    const athlete = await stravaApi.athlete.getLoggedInAthlete();
    console.log('API called successfully. Returned data:', athlete.id);
    return athlete;
  } catch (error) {
    console.error('Error fetching athlete:', error);
    throw error;
  }
}


async function getActivities() {
try{
  const athlete = await stravaApi.athlete.getLoggedInAthlete();
  const activities = await stravaApi.athlete.getStats({ id: athlete.id });
  const distance = activities.ytd_run_totals?.distance;
  const ytdDistance = distance !== undefined ? distance / 1000 : 0;
  console.log('Year-to-Date Running Distance:', ytdDistance);
  return { activities, ytdDistance };
}catch(error){
  
  console.error('Error fetching activities:', error);
  throw error;  
}}

export { getAthlete, getActivities };