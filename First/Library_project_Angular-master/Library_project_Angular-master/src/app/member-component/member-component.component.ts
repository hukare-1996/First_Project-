import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-component',
  templateUrl: './member-component.component.html',
  styleUrls: ['./member-component.component.css']
})
export class MemberComponentComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  submit(form) {
    if (this.userName == "kirti" &&this.password == "1234") {
      this.route.navigate(['mem']);
      alert('Login SUCCESS!! :-)\n\n')
    }else{
      alert("Invalid Credentials..");
     }
    console.log("firstname: " + form.userName);
    console.log("password: " + form.password);
    

  }

}
