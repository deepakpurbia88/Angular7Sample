// Employee.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Employee
let Employee = new Schema({
  employee_name: {
    type: String
  },
  employee_role: {
    type: String
  },
  employee_email_id: {
    type: String
  },
  employee_role: {
    type: String
  },
  mobile_number: {
    type: String
  },
  employee_id: {
    type: String
  },employee_id: {
    type: String
  },status:{
    type:String
  },access_token:{
    type:String
  }
},{
    collection: 'employee_records'
});

module.exports = mongoose.model('Employee', Employee);
