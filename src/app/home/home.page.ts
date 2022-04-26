import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirebaseError } from 'firebase/app';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    public authService: AuthService,
    public router: Router,
    public loadingController : LoadingController,
    public alertController : AlertController
  ) {}
  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['parent']);
    }
  }

  validationMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"Email entered is Incorrect"}
    ],
    password:[
      {type:"required", message:"Please enter your Password!"}

    ]
  }

  loginForm = new FormGroup({
    email : new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password : new FormControl('',Validators.compose([
      Validators.required
    ]))
  })

  async login(){
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const load = await this.loadingController.create();
    await load.present();

    try{
      const user = await this.authService.SignIn(email,password) ;
      await  load.dismiss();
      if(user){
        this.router.navigate(['parent']);
      }
    }catch(err){
      await  load.dismiss();
      const alert = await  this.alertController.create({
        header :'Failed',
        message :'Login Failed Error : email or password incorrect',
        buttons: ['OK'],
      });
      await alert.present();
    }
    
    //console.log(user);
    //this.authService.SignIn(email,password);
    
    
  }

}
