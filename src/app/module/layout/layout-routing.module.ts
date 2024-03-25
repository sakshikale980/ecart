import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './layout.component';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: layoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
