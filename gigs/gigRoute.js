const express = require("express")
const router = express.Router()
const db = require("../db/connection")
const Gigs = require("../db/gigModel.js")
router.get("/jobs", async(req, res, next)=> {
const jobs = await Gigs.findAll({
    attributes : ['id'],
    where : { id : 2}
}
)
console.log(jobs);
res.status(200).json(jobs)
}
)
.post("/jobs", async(req, res, next)=>{
    const { title, description, link} = req.body
   const result =  await Gigs.create({
     job_name : title,
     job_description :description,
     job_link: link
    });
  res.status(200).json(result)
})

module.exports = router