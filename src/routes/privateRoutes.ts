import express = require('express')
import HomeController from '../controllers/home.controller'
import validationMiddleware from '../middlewares/validation.md'
import CreateCatDto from '../dto/createCat.dto'

const homeController = new HomeController()

const Router = express.Router()

Router.post("/", validationMiddleware(CreateCatDto), homeController.getHome)

export default Router