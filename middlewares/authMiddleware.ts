import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../util/config.util";
import { payloadType } from "../types/payload";
import { CustomRequest } from "../types/payload";

export const authentication = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.cookies[config.COOKIE];

  if (!token) {
    res.status(401).json({ message: "Unauthorized Access: No token provided." });
    return;
  }

  try {
    const data = jwt.verify(token, config.SECRET_KEY) as payloadType;

    req.user = data;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Unauthorized Access: Invalid token." });
      return;
    } 
    
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Unauthorized Access: Token has expired." });
      return;
    }

    res.status(500).json({ message: "Internal Server Error: Token verification failed." });
  }
};
