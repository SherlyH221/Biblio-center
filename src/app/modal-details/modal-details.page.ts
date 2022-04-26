import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/AuthService';
import { Course } from '../services/Course';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.page.html',
  styleUrls: ['./modal-details.page.scss'],
})
export class ModalDetailsPage implements OnInit {
  @Input() Id : string ;
  courseSelected : Course;
  previous : string ;
  constructor(private cservice : CourseService, private modalctrl : ModalController , private authS : AuthService) { }

  ngOnInit() {
    this.cservice.findById(this.Id).valueChanges().subscribe(res =>
      {
        this.courseSelected=res;
        console.log(res);
      });
      const user = JSON.parse(localStorage.getItem('user'));
      this.authS.getUserById(user.uid).valueChanges().subscribe((res)=>{
          this.previous = res.courses ;
          console.log(this.previous);
      
    });

    
    
  }

    subscribeCourse(){
      if(this.previous.includes(this.courseSelected.id.toString())){
        return ;
      }
    if (this.previous ==""){
      this.authS.addToMyCourse(this.courseSelected.id.toString());
    }
    else {
      this.authS.addToMyCourse(this.previous+","+this.courseSelected.id.toString());

    }
    
    
    

  }

}
