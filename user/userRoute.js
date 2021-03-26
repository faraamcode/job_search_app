const express = require("express")
const {SignUp, UserLogin} =  require("./userCont")
const router = express.Router()
router.post("/signup",SignUp )
.post("/login", UserLogin)
.get('/user', (req, res, next)=>{
    res.render("index")
})

module.exports = router

