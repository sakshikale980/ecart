import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: layoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
 
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
