import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes"; // new

const app = express();

app.use(express.json());

app.use(routes);  // new

app.listen(3000, () => console.log("Server is running"));
