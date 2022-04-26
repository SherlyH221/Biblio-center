import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDetailsPage } from '../../modal-details/modal-details.page';
import { AuthService } from '../../services/AuthService';
import { Course } from '../../services/Course';
import { CourseService } from '../../services/CourseService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  userNow : string ;
   courses : Course[] ;
  constructor(private authS : AuthService, private cservice : CourseService , private modalctrl : ModalController) {
    //this.getCourses();

   }

  ngOnInit() {
    this.getCourses();
    const user = JSON.parse(localStorage.getItem('user'));
    this.authS.getUserById(user.uid).valueChanges().subscribe(res=>{
      this.userNow = res.name ;
    });




    //this.showDetails();
    //this.cservice.findById("1").valueChanges().subscribe(res => console.log(res));

        
  }
  //new Course(item.title,item.details,item.img,item.moreDetails,item.price)

   getCourses(){

    this.cservice.getCourses().valueChanges().subscribe(
      (res) => {
        this.courses = [] ;
        res.forEach((item) => {
          console.log(item);
          this.courses.push(new Course(item['id'],item['title'],item['details'],item['img'],item['moreDetails'],item['price'],item['duration'])
        );})

        });
  }

  async showDetails(course:Course){
    console.log("bienvenue sherly");
    const modal  =  await this.modalctrl.create({
      component : ModalDetailsPage ,
      componentProps : { Id:course.id},
      breakpoints : [0,0.8,1],
      initialBreakpoint : 0.8
    });
    modal.present();
  }

}
