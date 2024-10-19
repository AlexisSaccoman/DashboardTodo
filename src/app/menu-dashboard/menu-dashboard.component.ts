import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrl: './menu-dashboard.component.scss'
})
export class MenuDashboardComponent {

  public active:boolean = true;
  public activeLink:number = 0;

  constructor(private router: Router) {}

  goTo(route: string, index: number) {
    this.router.navigate([route]);
    this.updateFrontMenu(index);
  }

  updateFrontMenu(index:number){
    this.activeLink = index;
  }

}
