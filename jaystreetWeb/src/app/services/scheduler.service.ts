import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  batchId!: string;
  // baseurl = 'http://kmohen-003-site44.atempurl.com';
  baseurl='https://jaystreetapi.azurewebsites.net';

  // baseurl='https://localhost:44316';
  constructor(private http: HttpClient) { }
  setBatchId(data: any) {

    this.batchId = data
    // console.log(this.batchId + " services")
  }
  getBatchId() {
    return this.batchId
  }
  GetScheduler(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `/Schedular/GetAll`)
  }
  GetQueueProccess(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `/Schedular/ProcessAnalyseButton`)
  }
  DeleteScheduler(id:number):Observable<any>{ 
    return this.http.delete<any>(this.baseurl+`/Schedular?Id=`+id)
  }
}
