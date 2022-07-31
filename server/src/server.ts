import http from "http";
import app from "./app";

import { loadPlanetsData } from "./models/planets.model";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

startServer();
