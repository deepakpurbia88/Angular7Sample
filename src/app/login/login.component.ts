import { Component, OnInit } from '@angular/core';
import {EmployeeService}  from '../employee.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit() {
  }

  angForm : FormGroup;

  errorMessage : String;

  loginSuccessFlag: Boolean;
  

  constructor(private fb: FormBuilder, private es: EmployeeService, private router : Router) {
    this.createFrom();
    
   }

   createFrom(){
    this.angForm = this.fb.group({
      email_id: ['', [Validators.required, Validators.email] ],
      pwd: ['', Validators.required ]
      
    });
   }


  
  login(email_id,pwd){
    //debugger;
    this.es.login(email_id, pwd).subscribe((data : any) =>{
      
      if(data.status == "failed"){
        sessionStorage.clear();
        //alert(data.message);
        this.loginSuccessFlag = true;
        this.errorMessage = data.message;

             
      }else{
        alert("Login Successful");
        sessionStorage.clear();
        console.log("data-----", data);
        sessionStorage.setItem("access_token",data.access_token);
        sessionStorage.setItem("employee_name",data.employee_name);
        sessionStorage.setItem("employee_id",data.employee_id);
        sessionStorage.setItem("designation",data.designation);
        sessionStorage.setItem("manager",data.manager);
        this.router.navigate(['/employeedashboard']);
        
      }
      console.log(data);
      
      
    });
    
    

    
   
  }  


}
