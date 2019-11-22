const express = require('express');
const app = express();
const employeeRoutes = express.Router();

// Require Employee model in our routes module
let Employee = require('../models/Employee');



// Defined get data(index or listing) route
employeeRoutes.route('/login').post(function (req, res) {


    console.log("-----req Object --- ",req.body);
    let email_id = req.body.employee_email_id;
    let password = req.body.employee_password;

    console.log("email_id: ", email_id);
    console.log("password: ", password);

    
    
    Employee.findOne({"employee_email_id":email_id,"employee_password":password}, function (err, result){
    if(err){
      console.log(err);
    }
    else {
      
      if(result != {} && result != null){
        
        
        result.status = "success"; 
        console.log("########",result);
        
        res.json(result);
      }
      else{
        res.json({"status":"failed","message":"You have entered an invalid email address or password"});
      }

    }
    
  });
  
  
});

function validate(name){
  return name;
}


module.exports = employeeRoutes;