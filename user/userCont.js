const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("./userModel");


exports.SignUp = async(req, res, next)=>{

 const {email, phone, password, fullname}  = req.body
 const hashed = await bcrypt.hash(password, 10)


 const checkIfAvailable = await User.findAll({
     where : {user_email : email}
 })


 if ( checkIfAvailable.length < 1 ) {
     
     const result = await User.create({
        user_email : email,
        user_phone : phone,
        user_password : hashed,
        user_fullname : fullname
     })

     res.status(201).json({
         message : "user created successfully",
         result
     })

 }else{

     return res.status(400).json({
         message : "user already exit"
     })

 }
}


exports.UserLogin = async(req, res, next)=>{
    const {email, password}= req.body

    const checkIfAvailable = await User.findAll({
        where : {user_email : email}
    })

    // console.log(checkIfAvailable.length);

    if ( checkIfAvailable.length < 1 ) {
        
             return res.status(400).json({
                 message : "user does notexit"
             })
     

   
    }else{

   const dbpassword = checkIfAvailable[0].user_password
   const isPasswordCorrect = await bcrypt.compare(password, dbpassword)
  

     if (!isPasswordCorrect) {
       return res.status(400).json({
           message : "incorrect password" 
       })
      }
      const userdetails = {
          email,
          phone : checkIfAvailable[0].user_phone,
          password : checkIfAvailable[0].user_password,
           fullname: checkIfAvailable[0].user_fullname
      }
    jwt.sign(userdetails, "faramcode", {expiresIn: 60 * 60},  (err, token)=>{
        res.status(200).json(token)
    })

    }
}

