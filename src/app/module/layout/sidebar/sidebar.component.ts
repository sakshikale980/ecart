import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() sideBarStatus: boolean = false;


  roleId: any;
  list: any;

  constructor() { }

  ngOnInit(): void {
    this.roleId = localStorage.getItem('roleId');
    this.check();
  }

  check() {
    if (this.roleId == 1) {
      this.list = [
        {
          name: "DashBoard",
          route: "/dashboard",
          icon: 'fa fa-tachometer'
        },
        {
          name: "Users",
          route: "/user",
          icon: 'fa fa-users'
        },
        {
          name: "Company",
          route: "/company",
          icon: 'fa fa-building-o'
        },
        {
          name: "Employee",
          route: "/employee",
          icon: 'fa fa-building-o'
        },
        {
          name: "Client",
          route: "/client",
          icon: 'fa fa-users'
        },


      ]
    } else if (this.roleId == 2) {
      this.list = [
        {
          name: "DashBoard",
          route: "/dashboard",
          icon: 'fa fa-tachometer'
        },
        {
          name: "Employee",
          route: "/employee",
          icon: 'fa fa-building-o'
        },
        {
          name: "Client",
          route: "/client",
          icon: 'fa fa-users'
        },

      ]
    } else if (this.roleId == 3) {
      this.list = [
        {
          name: "DashBoard",
          route: "/dashboard",
          icon: 'fa fa-tachometer'
        },
        {
          name: "Company",
          route: "/company",
          icon: 'fa fa-building-o'
        }
      ]
    }
  }

}




