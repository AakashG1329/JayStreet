import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './routes/products/products.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { ReportComponent } from './routes/report/report.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NotfoundComponent,
    ReportComponent,
    
  ],
  imports: [
    BrowserModule,RoutesModule,RouterModule,ReactiveFormsModule,FormsModule,MatTableModule,HttpClientModule,ToastrModule.forRoot({  timeOut: 2500,}),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
