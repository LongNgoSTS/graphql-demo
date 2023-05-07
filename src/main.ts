import * as express from "express";
import * as dotenv from "dotenv";
import { createYoga } from "graphql-yoga";
import initRootSchema from "./entities/rootSchema";

const main = async () => {
  dotenv.config({});

  const yoga = createYoga({
    schema: await initRootSchema(),
  });
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(yoga);
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

main().catch((err) => console.log(err));
