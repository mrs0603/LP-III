import express from "express";
import cors from "cors";

import ShoeRouter from "./routes/Shoe";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/shoes", ShoeRouter);

export default server;
