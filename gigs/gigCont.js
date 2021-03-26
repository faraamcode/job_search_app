const express = require("express")
const Gigs = require("./gigModel")
exports.postJob = async(req, res, next)=>{
    const { title, description, link} = req.body
   const result =  await Gigs.create({
     job_name : title,
     job_description :description,
     job_link: link
    });
  res.status(200).json(result)
}

exports.getjobs =  async(req, res, next)=> {
  const jobs = await Gigs.findAll({
      attributes : ['id'],
      where : { id : 2}
  }
  )
  console.log(jobs);
  res.status(200).json(jobs)
}