import express = require('express')
import authController from '../controllers/auth.controller'
import validationMiddleware from '../middlewares/validation.md'
import SignUpDto from '../dto/signup.dto'
import SignInDto from '../dto/signIn.dto'
import homeController from '../controllers/home.controller'

const Router = express.Router()

Router.get('/' , homeController.getHome)

Router.post("/signUp", validationMiddleware(SignUpDto), authController.signUp)
Router.post("/signIn", validationMiddleware(SignInDto) , authController.signIn)

export default Router