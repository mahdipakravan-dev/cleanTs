import express = require('express')
import HomeController from '../controllers/homeController'

const Router = express.Router()

Router.get('/' , HomeController.getHome)

export default Router