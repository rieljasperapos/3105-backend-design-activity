import express from "express"
import dotenv from "dotenv"
import router from "./routes/user";

dotenv.config();

const app = express();
app.use(express.json());

const userRoute = router;

app.use("/", userRoute);


app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
})