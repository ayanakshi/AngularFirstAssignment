import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MemberComponent } from './members/member.component';
import { ProductComponent } from './products/product.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UserComponent } from './user/user.component';
import { AddEditMemberComponent } from './members/add-edit-member.component';
import { AuthGuard } from './shared/auth.guard';

/**
 * This class contains all the routing information for this application
 */
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      {
        path: 'members',
        component: MemberComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'members/new',
        component: AddEditMemberComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'members/edit/:id',
        component: AddEditMemberComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'reporting',
        component: ReportingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard]
      }

    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/members' } // Always at the end
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
