const express = require("express")
const {SignUp, UserLogin} =  require("./userCont")
const router = express.Router()
router.post("/signup",SignUp )
router.post("/login", UserLogin)

module.exports = router

