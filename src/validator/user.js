import Joi from 'joi'

const registerUserSchema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().alphanum().required()
})
const loginUserSchema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().alphanum().required()
})
const passwordSchema = Joi.object({
    password: Joi.string().alphanum().required()
})

export {
    registerUserSchema,
    loginUserSchema,
    passwordSchema
}