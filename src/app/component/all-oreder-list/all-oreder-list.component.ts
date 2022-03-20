import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Carts } from 'src/app/model/carts';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-all-oreder-list',
  templateUrl: './all-oreder-list.component.html',
  styleUrls: ['./all-oreder-list.component.scss']
})
export class AllOrederListComponent implements OnInit {

  public bookDetails: Book[] = [];
  public userDetails: User[] = [];
  public cartDetails: Carts[] = [];
  users: User = new User();
  book: Book = new Book();
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  static JWT_TOKEN: any;
  orderlist!: FormGroup;
  public token:any;
  public userId:any;

  public name:any;
  public phoneNumber:any;

  public totalprice:any;
  public totalingPrice! : number;
  public totalQTY! : number;
  public bookDataCount!: number;
  public totalPrice :number=0;

  constructor(private _formBuilder: FormBuilder,
    private httpService:HttpService,
    private router: Router,) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    }

  ngOnInit(): void{

    this.token = localStorage.getItem("JWT_TOKEN");
    this.httpService.getBooksByToken(this.token).subscribe((data: { data: any; }) => {
    this.bookDetails = data.data;
    console.log(this.bookDetails);
    });
   
    //this.token = localStorage.getItem("JWT_TOKEN");
    this.httpService.getUserByToken(this.token).subscribe((data: { data: any; }) => {
    this.users = data.data;
    // this.name =this.users.firstName;
    console.log("the length data",this.users.firstName);
    console.log("the length data",this.users.phoneNumber);
    this.name = this.users.firstName;
    this.phoneNumber = this.users.phoneNumber;
    
    
    // for(let uservalue of this.userDetails){
    //   console.log(uservalue);
      
    // }
    // for (let i = 0; i < this.userDetails.length; i++) {
    //     const val = this.userDetails[i];
    //     console.log(this.userDetails.length);
        
      
    // }
    // this.phoneNumber = this.users.phoneNumber;
    // console.log(this.name);
    // console.log(this.phoneNumber);
    
    });
      
    }
  
    quantities=[1,2,3,4,5,6,7,8,9,10]

    OnQTYChange(givenQuantity:any,$event:any,price:any){
      let startQTY = 0;
      if(givenQuantity > startQTY){ 
        console.log("1st "+startQTY);
        this.totalingPrice=((givenQuantity*price)-price);
        this.totalPrice +=this.totalingPrice;
        this.totalQTY=this.totalQTY-2;
        this.bookDataCount += givenQuantity-1;
      }
      if(givenQuantity<startQTY){ 
        console.log("2nd "+startQTY);
        this.totalingPrice=((givenQuantity*price)-price);
        this.totalPrice -=this.totalingPrice;
        this.totalQTY -=givenQuantity-1;
        // startQTY=givenQuantity;
        this.bookDataCount -= givenQuantity;
      }
      if(givenQuantity === startQTY){ 
        console.log("3rd "+startQTY);
        this.totalPrice-=price;
      }
      startQTY=givenQuantity;
    }
    
    removebook(bookId: number): void {
        console.log(bookId)
        this.httpService.deleteBookByBookId(bookId).subscribe(response => {
          console.log(response.data);
            this.ngOnInit();
        });
      }

    // onPrice(price:any): void{
      
    //   this.totalprice = price;
    //   console.log(this.totalprice);
      
    // }

}
