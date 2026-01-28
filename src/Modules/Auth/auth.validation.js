// ================= import module =================
import Joi from "joi";
// register schema
export const register = Joi.object({
  userName:Joi.string().min(3).max(30).required().messages({
    "string.empty": "user name is required",
    "string.min": "user name must be at least 3 characters",
    "string.max": "user name must be less than 30 characters"
  }),
  email:Joi.string().email().lowercase().required().messages({
    "string.email": "email format is invalid",
    "string.empty": "email is unique and required"
  }),
  password:Joi.string().min(8).required().messages({
    "string.min": "password must be at least 8 characters",
    "string.empty": "password is required"
  }),
  confirmPassword:Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "confirm password must match password",
    "string.empty": "confirm password is required"
  }),
  phone:Joi.string().pattern((/^01[0-2,5][0-9]{8}$/)).required().messages({
    "string.pattern.base": "phone must be 11 digits and start with 01",
    "string.empty": "phone is required"
  }),
  age:Joi.number().messages({
    "number.base": "age must be a number"
  }),
  gender: Joi.string().valid("male","female").messages({
    "any.only": "gender must be male or female"
  }),
  role:Joi.string().valid("user","admin").messages({
    "any.only": "role must be user or admin"
  })
}).required();


// login schema 

export const login = Joi.object({
email:Joi.string().email().lowercase().required(),
password:Joi.string().min(8).required(),
}).required();