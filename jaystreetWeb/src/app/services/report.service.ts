import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  //  baseurl='http://kmohen-003-site44.atempurl.com';
  baseurl='https://jaystreetapi.azurewebsites.net';

  // baseurl='https://localhost:44316';
  constructor(private http:HttpClient) { }
  GetReport(batchId:any):  Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+`/Products/GetReport?batchId=`+batchId)
  }
 
}
