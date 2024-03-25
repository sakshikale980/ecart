import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('../layout/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../layout/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'company',
    loadChildren: () => import('../layout/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'client',
    loadChildren: () => import('../layout/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('../layout/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../layout/profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
