// Import packages
import express from "express";
import cors from "cors";
import compression from "compression";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/index.js";

// App configurations
const app = express();

// Middleware and statics
app.use(compression());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const errorHandler = (err, request, response, next) => {
  console.error(err);
  response.status(500).json({ error: "Internal Server Error" });
};

app.use(errorHandler);

export default app;
