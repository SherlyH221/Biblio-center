import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  showList : boolean ;
  showCourses : boolean ;
  constructor(private authS : AuthService, private router : Router) {
   }

  ngOnInit() {
    if(!this.authS.isLoggedIn){
      this.router.navigate(['']);
    }
    this.showList = true ;

  }

  openList(){
    this.showList = true ;
    this.showCourses = false ;
  }

  openMycourses(){
    this.showCourses = true ;
    this.showList = false ;
  }

  logOut(){
    this.authS.logOut();
  }



}
