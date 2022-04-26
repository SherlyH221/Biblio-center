import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/AuthService';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm = new FormGroup({
    name : new FormControl('',Validators.compose([
      Validators.required
    ])),
    email : new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),
    phone : new FormControl('',Validators.compose([
      Validators.required
    ]))
  })

  validationMessage ={
    name : [
      {type:"required", message:"Please enter your Name"}
    ],
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"Email entered is Incorrect"}
    ],
    password:[
      {type:"required", message:"Please enter your Password!"},
      {type:"minlength", message:"Password must be 8 characters"}

    ],
    phone : [
      {type:"required", message:"Please enter your Phone"}
    ],
  }
  constructor(
    public authService: AuthService,
    public router: Router,
    public loadingController : LoadingController,
    public alertController : AlertController
  ) { }

  ngOnInit() {
  }

  test(){
    console.log(this.signupForm.get('email').value);
  }

  async signUp(){
    const name = this.signupForm.get('name').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const phone = this.signupForm.get('phone').value;
    const load = await this.loadingController.create();
    await load.present();

    const user = await this.authService.RegisterUser(email,password) ;
    await  load.dismiss();
    if(user){
      this.authService.AddUser(user.user.uid,name,email,password,phone);
      this.router.navigate(['home']);
    }else{
      const alert = await this.alertController.create({
        header :'Failed',
        message :'Registration Failed Error',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

}
