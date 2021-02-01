import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Users } from '../users';



@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {


  Book_title:any;
  id:any;
  users:Users[]=[];
  Book_auther: any;
  pageCount: any;
  NumberOfBooks: any;
  constructor(private router: Router,public rs: DataService) { }
  
  ngOnInit() {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
    this.rs.getDetails().subscribe(data => {
      console.log(data);
      this.users=data;
     })
  }
  Search(){
    if(this.Book_title=="" ){
      this.ngOnInit();
    }else{
      this.users= this.users.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase()); 
      })
    }
  }
  deleteRow(val){
    if(confirm("Are you sure to return?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })}
  }
 
  update(id){
    this.router.navigate(['/update',id]);
  }
  add(users){
    this.router.navigate(['/create',users]);
  }
  get(id){
    this.router.navigate(['/search',id]);
}
getData(user){
  // this.id = user.id;
  this.Book_title = user.Book_title;
  this.Book_auther = user.Book_auther;
  this.NumberOfBooks = user.NumberOfBooks;
 
  }

  Logout(){
    alert("Are you sure you want to Logout??");
    this.router.navigate(['']);
  }
  
  
}
