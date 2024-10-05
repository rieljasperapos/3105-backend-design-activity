import { Request } from "express";
export type payloadType = {
  id: number;
  username: string;
  email: string;
};

export interface CustomRequest extends Request {
  user?: payloadType
};