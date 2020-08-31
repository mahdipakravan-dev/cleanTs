import express = require('express')
import authController from '../controllers/auth.controller'
import validationMiddleware from '../middlewares/validation.md'
import SignUpDto from '../dto/signup.dto'

const Router = express.Router()

Router.post("/signUp", validationMiddleware(SignUpDto), authController.signUp)

export default Router