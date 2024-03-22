import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutRoutingModule } from './layout-routing.module';
import { layoutComponent } from './layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { UsersComponent } from '../components/users/users.component';
import { CompaniesComponent } from '../components/companies/companies.component';
import { ClientComponent } from '../components/client/client.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SettingComponent } from '../components/setting/setting.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    layoutComponent,
    HeaderComponent,
    UsersComponent,
    CompaniesComponent,
    ClientComponent,
    AboutComponent,
    ContactComponent,
    SettingComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    layoutRoutingModule,
  ],
  exports: [
  ]
})
export class layoutModule { }
