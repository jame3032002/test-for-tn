import Express, { Request, Response } from "express";

import { findTripsByKeyword } from "./trips/trips.service";

const app = Express();
const PORT = 2000;

app.get("/api/trips", async (req: Request, res: Response) => {
  const { query } = req;
  const keyword = query.keyword ? query.keyword.toString() : undefined;
  const trips = await findTripsByKeyword(keyword);

  res.json({ trips });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
