const Sequelize = require("sequelize") 
// const { DataTypes } = require("sequelize/types") 
const db = require("../config/connection")
const Gigs = db.define('gigs', {
    job_name: {type : Sequelize.STRING },
    job_description : {type : Sequelize.STRING },
    job_link :  {type : Sequelize.STRING },
    // post_date :  {type : Sequelize.DATE },

});
Gigs.sync().then(() => {
    console.log('table created');
  });
module.exports = Gigs