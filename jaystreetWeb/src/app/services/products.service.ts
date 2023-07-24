import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // baseurl='http://kmohen-003-site44.atempurl.com';
  baseurl='https://jaystreetapi.azurewebsites.net';
  // baseurl='https://localhost:44316';
  constructor(private http:HttpClient) { }
  CreateProduct(emp:any):Observable<any>{
    return this.http.post<any>(this.baseurl+`/products`,emp)
  }
  Getprodcts():  Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+`/Products/GetAll`)
  }
  DeleteProduct(id:number):Observable<any>{ 
    return this.http.delete<any>(this.baseurl+`/Products?Id=`+id)
  }
  CreateScheduler(data:any):Observable<any>{
    return this.http.post<any>(this.baseurl+`/Schedular`,data)
  }
}
