import express from "express"
import router from "./routes/user";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import { config } from "./util/config.util";
import limiter from "./middlewares/rateLimiter";

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(limiter);

// Routes
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${config.PORT}`);
})