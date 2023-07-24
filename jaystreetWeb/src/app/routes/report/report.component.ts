import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/services/report.service';
import { SchedulerService } from 'src/app/services/scheduler.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  products:any;
 batchId:any;
 isLoading=true;
 reportResponse:any;

  constructor(private reporterService:ReportService,private router:Router,public activatedRoute: ActivatedRoute,private schedulerServices:SchedulerService ,
    private toastr:ToastrService,private location: Location ) {

    
  }
  ngOnInit():void{
   var batch= this.activatedRoute.snapshot.queryParams 
   console.log(batch)
   console.log(batch['id']);

   this.batchId=batch['id'];
//     this.activatedRoute.queryParams.subscribe((res:any)=>{
// console.log(res.data)
// this.batchId=res.data;
//     })
   this.getReports();
  //  this.batchId= this.schedulerServices.getBatchId();
  //  console.log("reportPage "+this.batchId)
  //  this.getReports(this.batchId);
  }
  getReports(){
console.log(this.batchId+"=batchId")
    this.reporterService.GetReport(this.batchId).subscribe(res=>{
      this.products=res;
      console.log(this.products)
      console.log(this.products.keywords)
      this.isLoading=false;
      if(this.products.keywords.length<=0){
        this.reportResponse=false;
      }else{
        this.reportResponse=true;
      }
      // console.log(this.products)
    },
    (error)=>{
      this.isLoading=false;
      // this.toastr.warning('Something went wrong during Show Reports')
    })
    
}
goBack(): void {
  window.self.close(); 
}
}
