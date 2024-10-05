import { config as dotenv } from "dotenv";

dotenv();

export const config = {
  PORT: process.env.PORT as string,
  SALTROUNDS: process.env.SALTROUNDS as string,
  SECRET_KEY: process.env.SECRET_KEY as string,
  COOKIE: process.env.COOKIE as string
};