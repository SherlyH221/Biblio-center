import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/services/Course';
import { CourseService } from 'src/app/services/CourseService';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss'],
})
export class MycoursesComponent implements OnInit {
  List : Course[];
  constructor( private cservice : CourseService ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.List = this.cservice.getList(user.uid);
    console.log(this.List);
  }

}
