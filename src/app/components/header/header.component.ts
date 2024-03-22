import { Component,EventEmitter,Output, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideBarToggled = new EventEmitter<boolean>();
  menuStatus:boolean = false;
  


  constructor() {
   
   }

  ngOnInit(): void {
  }
  SideBarToggle(){
       this.menuStatus =! this.menuStatus;
       this.sideBarToggled.emit(this.menuStatus)
  }
}



