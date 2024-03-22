import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './layout.component';
import { UsersComponent } from '../components/users/users.component';
import { CompaniesComponent } from '../components/companies/companies.component';
import { ClientComponent } from '../components/client/client.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SettingComponent } from '../components/setting/setting.component';

const routes: Routes = [
  {path:'',component:layoutComponent,children: [
  {path:"users",component:UsersComponent},
  {path:"companies",component:CompaniesComponent},
  {path:"client",component:ClientComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"setting",component:SettingComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class layoutRoutingModule { 


  

}
