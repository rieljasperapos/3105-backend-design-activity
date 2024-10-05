import { Request, Response } from "express";
import { userLoginSchema, userRegisterSchema } from "../schema/userSchema";
import { User } from "../models/userModel";
import { config } from "../util/config.util";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getProfile = (req: Request, res: Response) => {
  const { id } = req.params;

  const profile = User.findById(Number(id));

  if (!profile) {
    res.status(400).send({ message: "User not found "});
    return;
  }

  res.status(200).send({
    message: "Successfully retrieved profile",
    profile,
  });
};

export const register = async (req: Request, res: Response) => {
  const { error, value } = userRegisterSchema.validate(req.body);

  if (error) {
    res.status(400).send({ message: "Validation Error", error: error.details })
    return;
  }

  const saltRounds = parseInt(config.SALTROUNDS);
  const passwordHash = await bcrypt.hash(value.password, saltRounds);

  const existingUser = User.findOne(value.username);

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const newUser = User.create({
    username: value.username,
    email: value.email,
    password: passwordHash
  });

  if (!newUser) {
    res.status(400).send({ message: "User not found" });
    return;
  }

  res.status(200).send({
    message: "Registered Successfully",
    newUser,
  });
};

export const login = async (req: Request, res: Response) => {
  const { error, value } = userLoginSchema.validate(req.body);

  if (error) {
    res.status(400).send({ message: error.details });
    return;
  }

  const user = User.findOne({ username: value.username });

  if (user) {
    const passwordMatched = await bcrypt.compare(value.password, user.password);
    
    if (!passwordMatched) {
      res.status(400).send({ message: "Incorrect Password" });
      return;
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, config.SECRET_KEY);

    res.cookie(config.COOKIE, token, { secure: true, maxAge: 30 * 60 * 1000, httpOnly: true })
    res.status(200).send({ message: "Log in successful ", token})

    return;
  }

  res.send({ message: "username not found" });
};
