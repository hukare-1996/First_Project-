import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: any;

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit() {
   
  }
  submit(contactForm) {
    if (this.userName == "Librarian" &&this.password == "1234") {
      this.route.navigate(['admin']);
      alert('Login SUCCESS!! :-)\n\n')
    }else{
      alert("Invalid Credentials..");
     }
    console.log("firstname: " + contactForm.userName);
    console.log("password: " + contactForm.password);
    
   
  }
}
