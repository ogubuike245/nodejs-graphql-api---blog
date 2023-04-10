// Import packages
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

// App configurations
const app = express();

// Middleware and statics
app.use(compression());
app.use(cors());
app.use(helmet());

// error handling middleware
const errorHandler = (err, request, response, next) => {
  // Log the error
  console.error(err);

  // Set the status code for the response
  response.status(500).json({ error: "Internal Server Error" });
};

app.use(errorHandler);

export default app;
