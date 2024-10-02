import { Request, Response } from "express";
import { userType } from "../types/userType";

export const getProfile = (req: Request, res: Response) => {
  res.send("User profile");
}

export const register = (req: Request, res: Response) => {
  const data: userType = req.body;

  res.send({
    message: "Registered Successfully",
    data
  });
}

export const login = (req: Request, res: Response) => {
  res.send("Login user");
}