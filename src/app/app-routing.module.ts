import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ClientComponent } from './components/client/client.component';

import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SettingComponent } from './components/setting/setting.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.layoutModule) },
  {path: 'login', component:LoginComponent}
  // {path:"users",component:UsersComponent},
  // {path:"companies",component:CompaniesComponent},
  // {path:"client",component:ClientComponent},
  // {path:"about",component:AboutComponent},
  // {path:"contact",component:ContactComponent},
  // {path:"setting",component:SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

