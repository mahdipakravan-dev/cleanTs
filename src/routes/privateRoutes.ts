import express = require('express')
import HomeController from '../controllers/homeController'

const homeController = new HomeController()

const Router = express.Router()

Router.all('/', homeController.getHome)

export default Router