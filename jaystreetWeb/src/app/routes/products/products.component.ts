import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  submitted!: boolean; 
  products:any;
  productForm!:FormGroup;
  isLoading=true;
  productResponse=true;
  constructor(private fb:FormBuilder,private prodectsServices:ProductsService,private toastr:ToastrService) {
this.productForm=this.fb.group({

  asin:['',[Validators.required,Validators.minLength(10)]],
})
  }
  ngOnInit():void{
    this.GetProducts();
    // this.products=this.productDe;
    // console.log(this.products);
 
  }
  CreateProducts(){
    if(this.productForm.valid){
this.prodectsServices.CreateProduct(this.productForm.value).subscribe((response)=>{
this.productForm.reset();
this.toastr.success("Product successfully Added");
this.GetProducts();
let ref = document.getElementById('close')
ref?.click();
},
(erorr)=>{
  // this.toastr.warning('Something went wrong during Add products')
}
);
      this.submitted=false;
    }else{
      this.submitted=true;
      // this.toastr.error('Invalid Form')
    }
  }
  deleteProducts(id:any){

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
        this.prodectsServices.DeleteProduct(id).subscribe((response)=>{
          this.toastr.success("Product successfully deleted");
          this.GetProducts();
      },
      (error) => {
        // this.toastr.warning('Something went wrong during deleting products')
      }
    );

// end
      }
    })
  }
  
  GetProducts(){
    this.prodectsServices.Getprodcts().subscribe(response=>{
      // console.log("Product"+response);
      this.products=response;
      this.isLoading=false;
      console.log(this.products.length)
      if(this.products.length<=0){
        this.productResponse=false;
      }

      
    }
    ,
    (error)=>{
      this.isLoading=false;
      // this.toastr.warning('Something went wrong during Show Products')
    })
  }
  productAnalyze(item:any){
    var data={
      productId:item.id
    }
   
    this.prodectsServices.CreateScheduler(data).subscribe(res=>{

      this.toastr.success('ASIN-'+ item.asin+' Added in competitor analyze')
  

    }
    ,
    (error)=>{
      this.isLoading=false;
      // this.toastr.warning('Something went wrong during Add Products')
    })
    
  }
}