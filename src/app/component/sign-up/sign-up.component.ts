import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  user: User = new User();
  login!: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private httpService: HttpService
  ) {
    this.login = new FormGroup({
      firstName: new FormControl('', [
        Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$'),
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$'),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    console.log(this.user);
  }

  onSubmit() {
    this.user = this.login.value;
    console.log(this.user);
    this.httpService.addNewUser(this.user).subscribe((resp) => {
      console.log(resp);
      this.router.navigateByUrl('/login');
    });
  }
  onCancel(){
    this.router.navigateByUrl('/signup')
  }

}
