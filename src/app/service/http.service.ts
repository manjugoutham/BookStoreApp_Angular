import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {

  }

  getBookStoreData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "bookstore/get");
  }

  addNewUser(body: any): Observable<any>
  {return this.httpClient.post(this.baseUrl + "create", body);}

  loginUser(body : any): Observable<any>
  { return this.httpClient.post(this.baseUrl + "authentication/login", body);}

  // deletebookData(perId: number): Observable<any> { 
  //   return this.httpClient.delete(this.baseUrl + "delete/" + perId); } 

  updatebookData(id: number, body: any): Observable<any> { 
    return this.httpClient.put(this.baseUrl + "update/" + id, body); } 

  sendOTPToEmail(body: any): Observable<any> 
    { return this.httpClient.post(this.baseUrl + 'authentication/sendOTPToEmail', body); }

  verifyOTPFromEmail(body: any): Observable<any> 
    { return this.httpClient.post(this.baseUrl + 'authentication/verify_otp', body); }

  changeExistingPasswordInDatabases(body: any): Observable<any> 
    { return this.httpClient.put(this.baseUrl + 'authentication/rest_password', body); }

  
    getBooksByOrderByPriceAsc(): Observable<any> { // done
      return this.httpClient.get(this.baseUrl + "bookstore/getBooksByOrderByPriceAsc");
    }
    
    getBooksByOrderByPriceDesc(): Observable<any> { // done
      return this.httpClient.get(this.baseUrl + "bookstore/getBooksByOrderByPriceDesc");
    }

    getBooksByAuthor(body : any): Observable<any> { // done
      return this.httpClient.post(this.baseUrl + "bookstore/getBooksByAuthor", body);
    }

    getBookStoreCartData(): Observable<any> {
      return this.httpClient.get(this.baseUrl + "bookstorecart/get");
    }

    // deleteCartData(bookId: number): Observable<any> {
    //   return this.httpClient.delete(this.baseUrl + "bookstorecart/delete/" + bookId);
    // }

    // getAllCartBookId():Observable<any> {
    //   return this.httpClient.get(this.baseUrl + "bookstorecart/get");
    getBooksByToken(token:any):  Observable<any> {
      return this.httpClient.get(this.baseUrl + "bookstorecart/getTokenByEmail/" + token);
    }

    deleteBookByBookId(books_book_id: any): Observable<any> {
      return this.httpClient.delete(this.baseUrl + "bookstorecart/deleteBookByBookId/"+books_book_id);
    }

    getUserIdByToken(token:any):  Observable<any> {
      return this.httpClient.get(this.baseUrl + "bookstorecart/getUserIdByToken/" + token);
    }

    addBooksToCartByCartID(body: any): Observable<any> {
      return this.httpClient.post(
        this.baseUrl + 'bookstorecart/create',body);
    }

    getUserByToken(token:any):  Observable<any> {
      return this.httpClient.get(this.baseUrl + "order/getUserByToken/" + token);
    }

    sendOrderToEmail(token:any):  Observable<any> {
      return this.httpClient.get(this.baseUrl + "order/sendOrderEmail/" + token);
    }

}

