const {Sequelize} = require("sequelize");
const dbconnect = require("../config/connection")

const User = dbconnect.define("user", {
    user_email : {type : Sequelize.STRING},
    user_phone : {type : Sequelize.STRING},
    user_password : {type : Sequelize.STRING},
    user_fullname : {type : Sequelize.STRING}
})
User.sync().then(()=> console.log("user table created"))
module.exports = User