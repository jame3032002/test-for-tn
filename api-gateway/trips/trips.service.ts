import axios from "axios";

import { JSON_SERVER_URL } from "../config";

async function getTrips() {
  const response = await axios({
    method: "GET",
    url: `${JSON_SERVER_URL}/trips`,
  });

  return response.data;
}

async function findTripsByKeyword(keyword: string | undefined) {
  if (keyword) {
    return getTripsByKeyword(keyword);
  }

  return getTrips();
}

async function getTripsByKeyword(keyword: string) {
  let trips = await getTrips();

  trips = trips.filter((trip: any) => {
    return (
      trip.tags.includes(keyword) ||
      trip.title.includes(keyword) ||
      trip.description.includes(keyword)
    );
  });

  return trips;
}

export { findTripsByKeyword, getTrips, getTripsByKeyword };
