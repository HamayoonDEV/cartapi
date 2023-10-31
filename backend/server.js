import express from "express";
import { PORT } from "./config/index.js";
import connectDb from "./database/database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middleWare/errorhandle.js";
const app = express();
app.use(cookieParser);
connectDb();
app.use(express.json({ limit: "50mb" }));
app.use(router);

app.use(errorHandler);
app.listen(PORT, console.log(`server is running on PORT:${PORT}`));
