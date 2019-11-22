var host=process.env.DB_HOST||'localhost'
//console.log("host name ---", host);

module.exports = {
    DB: 'mongodb://'+host+':27017/employeeDB'
 };