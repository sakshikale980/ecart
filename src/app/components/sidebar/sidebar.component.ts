import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() sideBarStatus: boolean = false;

  list =[
    {
      number:'1',
      name: "Users",
      icon: 'fa fa-users'
    },
    {
      number:'2',
      name: "Companies",
      icon: 'fa fa-building'
    },
    {
      number:'3',
      name: "Client",
      icon: 'fa fa-user-circle-o'
    },
    {
      number:'4',
      name: "Setting",
      icon: 'fa fa-cogs'
    },
    {
      number:'5',
      name: "About",
      icon: 'fa fa-info-circle'
    },

    {
      number:'6',
      name:"Contact",
      icon: 'fa fa-phone'
    }
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
