import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ReportComponent } from './report/report.component';
import {SweetAlert2Module}from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
const routes:Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Report', component: ReportComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SchedulerComponent
  ],
  imports: [RouterModule.forRoot(routes, { useHash: true }),ReactiveFormsModule,FormsModule,CommonModule,MatTableModule,ToastrModule.forRoot()],
  exports: [RouterModule],
})
export class RoutesModule { }
