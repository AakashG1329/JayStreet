import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SchedulerService } from 'src/app/services/scheduler.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  batchId:any;
  schedulerData:any;
  isLoading=true;

constructor(private schedulerService :SchedulerService ,private router:Router,private toastr:ToastrService) {
  

}
ngOnInit():void{
  this.getScheduler();

}
reportPage(id:any){
  // this.router.navigate(['/Report', {id}])
}
viewReport(id:any){
  // const url:any = 
  //   this.router.navigate(['/scheduler'])
  // ;

  // window.open(url, '_blank');
// this.router.navigate(['/Report'],{queryParams:{data:id}})
  // window.open(url,'_blank')
// this.batchId=id;
// this.schedulerService.setBatchId(this.batchId)
// console.log("sche "+this.batchId)
}
getScheduler(){
    this.schedulerService.GetScheduler().subscribe(res=>{
      this.schedulerData=res;
      this.isLoading=false;
   
    }
    ,
    (error)=>{
      this.isLoading=false;
      // this.toastr.warning('Something went wrong during Show Scheduler')
    })
}
ButtonClick(){


  this.schedulerService.GetQueueProccess().subscribe(res=>{
this.getScheduler();
    this.isLoading=false;
  }
  ,
  (error)=>{
    this.isLoading=false;
    // this.toastr.warning('Something went wrong during Show Scheduler')
  });
  // https://localhost:44316/Schedular/ProcessAnalyseButton?BatchId=151

}
deleteScheduler(id:any){

  Swal.fire({
    title: 'Are you sure you want to delete this ASIN?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result: any) => {
    if (result.isConfirmed) {
// start
console.log(id)
      this.schedulerService.DeleteScheduler(id).subscribe((response)=>{
        this.toastr.success("Scheduler successfully deleted");
        this.getScheduler();
    },
    (error) => {
      // this.toastr.warning('Something went wrong during deleting Scheduler')
    }
  );

// end
    }
  })
}

}
