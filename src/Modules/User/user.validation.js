import Joi from "joi";

// update profile
export const updateProfile=Joi.object({
    email:Joi.string().email().lowercase(),
    userName:Joi.string().min(3).max(30),
    phone:Joi.string().pattern((/^01[0-2,5][0-9]{8}$/)),
    age:Joi.number(),
    gender: Joi.string().valid("male","female")
}).required()

// update (change) password
export const updatePassword=Joi.object({
    oldPassword:Joi.string().min(8).required(),
    password:Joi.string().not(Joi.ref("oldPassword")).min(8).required(),
    confirmPassword:Joi.string().valid(Joi.ref("password")).required()
}).required()


