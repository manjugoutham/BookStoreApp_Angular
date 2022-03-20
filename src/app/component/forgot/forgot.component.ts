import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  hide = true;
  person:User = new User();
  login!: FormGroup;
  step = 0;

  constructor(private _snackBar: MatSnackBar,private router: Router,private httpService:HttpService) {
    this.login=new FormGroup({
      email: new FormControl(null,[Validators.required]),
      otp:new FormControl(null,[Validators.required]),
      password: new FormControl(null, [
        Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[-+(){}_!@#$%^&., ?]){8,}.$'),
        Validators.required,
      ])
    })
  } 

  onSendMail(){
    this.person=this.login.value;
    console.log(this.person.email);
    this.httpService.sendOTPToEmail(this.person).subscribe(resp =>{
      console.log(resp);
      if ( resp.data != null) {
        console.log(resp.data);
        this.step++; // GOING TO NEXT EXPANSION PANEL
      } else {
        this.router.navigateByUrl("/forgotpwd")
      }
    });    
  }

  
  onVerifyOTP(){
    this.person=this.login.value;
    console.log(this.person.otp);
    this.httpService.verifyOTPFromEmail(this.person).subscribe(resp =>{
      console.log(resp);
      if ( resp.data != null) {
        console.log(resp.data);
        this.step++; // GOING TO NEXT EXPANSION PANEL
      } else {
        this.router.navigateByUrl("/forgotpwd")
      }
    });    
  }

  onSubmit(){
    this.person=this.login.value;
    console.log(this.person);
    // on submit redirect to the /login page and again user need to login
    this.httpService.changeExistingPasswordInDatabases(this.person).subscribe(resp =>{
      console.log(resp);
    // if any step is wrong while updating new password then redirect to the same /password_rest page
    if ( resp.data != null) {
        console.log(resp.data);
        this.router.navigateByUrl("/login")
        this.openSnackBar();
      } else {
        this.router.navigateByUrl("/forgotpwd")
      }
    });  
  }

  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }
  
  ngOnInit() {
    console.log(this.person);
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  durationInSeconds = 5;

 
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponentPassword_rest, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
    });
  }
}

@Component({
  selector: 'SnackBar-Component',
  templateUrl: 'snakeBar.html',
  styles: [
    `
      .add-person {
        color: whitespace;
      }
    `,
  ],
})
export class SnackBarComponentPassword_rest {}