import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { AuthService } from "./AuthService";
import { Course } from "./Course";

@Injectable({
    providedIn: 'root',
  })
export class CourseService {
    list : Course[];
    courseList : AngularFireList<any> ;
    courseRef : AngularFireObject<any>;
    constructor(private fireDB : AngularFireDatabase, private authS : AuthService){}

    getCourses(){
        this.courseList=this.fireDB.list("Courses/");
        return this.courseList ;
    }
    findById(id :string){
        this.courseRef = this.fireDB.object("Courses/"+id);
        return this.courseRef;
    }

    getList(id : any){
        this.list = [];
        this.authS.getUserById(id).valueChanges().subscribe((res)=>{
                const item = res.courses.split(",");
                item.forEach((one)=>{
                    if(one!=="0"){
                        this.findById(one).valueChanges().subscribe((res)=>{
                            this.list.push(res);
                    })
                    }
                    
            });

            
        });
        console.log(this.list);
        return this.list ;

    }

    


}