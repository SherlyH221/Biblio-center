import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    userRef : AngularFireObject<any>;
    authState = new BehaviorSubject(false);
    userLive : any ;
    coursesList : any ;
    constructor(  
        public angStore: AngularFirestore,
        public angFireAuth: AngularFireAuth,
        public anDB : AngularFireDatabase,
        public router: Router){
          this.angFireAuth.authState.subscribe((user)=>{
            if(user){
              this.userLive = user ;
              localStorage.setItem('user', JSON.stringify(this.userLive));
              JSON.parse(localStorage.getItem('user'));
            }else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          })
        }

      // Login in with email/password
    async SignIn(email, password) {
      try{
        this.authState.next(true);
        return this.angFireAuth.signInWithEmailAndPassword(email, password);
      }catch(e){
        return null ;
      }
        
    }

    isAuthenticated() {
      return this.authState.value;
      }
    // Register user with email/password
    async RegisterUser(email, password) {
      try{
        return this.angFireAuth.createUserWithEmailAndPassword(email, password);
      }catch(e){
        return null;
      }
        
    }
    //add user in database 
    AddUser(id , name , email , password , phone){
      return this.anDB.object('users/'+id).set({
        name : name ,
        email : email ,
        password : password ,
        phone : phone ,
        courses : ""
      })
    }

    //logout 
    logOut(){
      this.angFireAuth.signOut().then(()=>
      {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      }
      )
    }

    getUserById(id : string){
      this.userRef = this.anDB.object("users/"+id);
      return this.userRef ;
    }

    //user logged ? 
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return user !== null ;
    }

    
    addToMyCourse(courses : string){
      return this.userRef.update({
        courses : courses
      });
      
  }

}