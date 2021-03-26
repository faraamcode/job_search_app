const express = require("express")
const router = express.Router()
const {postJob, getjobs} = require("./gigCont")
router.get("/jobs", getjobs)
.post("/jobs", postJob)

module.exports = router