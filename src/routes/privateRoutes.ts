import express = require('express')
import AuthHandler from '../middlewares/Auth.md'

const Router = express.Router()

Router.use(AuthHandler)

Router.get("/testAuth", (req, res) => {
    res.send("Controller")
})

export default Router