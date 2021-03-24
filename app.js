const express = require("express")
const app = express()
const gigRoute = require("./gigs/gigRoute")
const sequelize = require("./db/connection")

app.use(gigRoute)
app.listen(3002, ()=> console.log("connected to port 3002"))