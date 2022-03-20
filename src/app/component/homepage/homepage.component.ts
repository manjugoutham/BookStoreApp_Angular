import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  
  public token: any;
  public bookCount: number = 0; 
  public bookDetails: Book[] = [];
  dataService: any;
  public userId: any;
  addBook!: FormGroup;
  book: Book = new Book();

  constructor(private router: Router,private _snackBar: MatSnackBar,private httpService:HttpService) { 
    this.addBook = new FormGroup({ 
      quantity : new FormControl('',Validators.required),
      bookId : new FormControl('',Validators.required),
      author : new FormControl(''),
      userId : new FormControl('')
    });
  }
              

  /**
   * It gets the employee data from the server and displays it in the employee list.
   */
  ngOnInit(): void {
    this.token = localStorage.getItem("JWT_TOKEN");
    console.log(this.token);
    
    this.httpService.getBookStoreData().subscribe((data: { data: any; }) => {
      this.bookDetails = data.data;
      this.bookCount = this.bookDetails.length;
      console.log(this.bookDetails);
    });

    this.httpService.getUserIdByToken(this.token).subscribe((data: { data: any; }) => {
      this.userId = data.data;
      console.log(this.userId);
      });
  
  }


  OnSortAsc(){
    this.httpService.getBooksByOrderByPriceAsc().subscribe(data =>{
      console.log(data);
      this.bookDetails=data.data;
    })
  }

  OnSortDesc(){
    this.httpService.getBooksByOrderByPriceDesc().subscribe(data =>{
      console.log(data);
      this.bookDetails=data.data;
    })
  }

  OnArrivalAsc(){
    this.httpService.getBooksByOrderByPriceAsc().subscribe(data =>{
      console.log(data);
      this.bookDetails=data.data;
    })
  }

  OnArrivalDesc(){
    this.httpService.getBooksByOrderByPriceDesc().subscribe(data =>{
      console.log(data);
      this.bookDetails=data.data;
    })
  }

  OnSearch(){
    this.book = this.addBook.value;
    console.log(this.book);

    if(this.book.author != ''){
      this.httpService.getBooksByAuthor(this.book).subscribe(book =>{
        if(book.data.length === 0){
          this.ngOnInit();
        }else{
          console.log(book.data);
          this.bookDetails=book.data;
        }
      });
    } else{
      this.ngOnInit();
    }
  } 
  
  OnAddTOCart(bookId:number){
    this.book = this.addBook.value;
    this.book.bookId=bookId;
    this.book.userId = this.userId;
    if(this.book.bookId != 0){
      console.log(this.book);
      this.httpService.addBooksToCartByCartID(this.book).subscribe(dataNew=>{
        console.log(dataNew.data);
      })
      }
  }

  OnLogOut(){
    this.router.navigateByUrl('/login')
  }
}
