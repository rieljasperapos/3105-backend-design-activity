import Joi from "joi";

export const userRegisterSchema = Joi.object({
  id: Joi.number(),
  username: Joi.string().alphanum().min(2).max(30).required(),
  password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\\d!@#$%^&*(),.?":{}|<>]{8,}$')).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

export const userLoginSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(30).required(),
  password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\\d!@#$%^&*(),.?":{}|<>]{8,}$')).required(),
});
