import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import  { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { MemberComponent } from './members/member.component';
import { MemberService } from './members/member.service';
import { ProductComponent } from './products/product.component';
import { ProductService } from './products/product.service';
import { ReportingComponent } from './reporting/reporting.component';
import { UserComponent } from './user/user.component';
import { AddEditMemberComponent } from './members/add-edit-member.component';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    MemberComponent,
    ProductComponent,
    ReportingComponent,
    UserComponent,
    AddEditMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [LoginService, MemberService, AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
