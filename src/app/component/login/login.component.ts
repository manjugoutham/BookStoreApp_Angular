import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public JWT_TOKEN : any = "";  

  hide = true;
  user: User = new User();
  login!: FormGroup;
  static JWT_TOKEN: any;

  public token:any;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private httpService: HttpService
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    console.log(this.user);
    // console.log(JWT_TOKEN);
    
  }

  onSubmit() {
    this.user = this.login.value;
    console.log(this.user);
    this.httpService.loginUser(this.user).subscribe((resp: any) => {
      console.log(resp);
      LoginComponent.JWT_TOKEN =resp.data;
      localStorage.setItem("JWT_TOKEN",resp.data);
      // console.log(LoginComponent.JWT_TOKEN);
      this.router.navigateByUrl('/homepage');
    });
    this.token = localStorage.getItem("JWT_TOKEN");
    console.log(this.token);
  }


  getToken(){
    console.log(LoginComponent.JWT_TOKEN);
  }

  onCancel(){
    this.router.navigateByUrl('/login')
  }

}

