import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import connectDB from "./config/database";

import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import uploadRouter from "./routes/upload";

const app: Application = express();
dotenv.config();

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", uploadRouter);

export const viteNodeApp: Application = app;
