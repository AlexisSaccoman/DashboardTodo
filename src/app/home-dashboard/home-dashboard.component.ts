import { Component } from '@angular/core';
import { MenuDashboardComponent } from '../menu-dashboard/menu-dashboard.component';
import { MeteoDashboardComponent } from '../meteo-dashboard/meteo-dashboard.component';
import { TasksDashboardComponent } from '../tasks-dashboard/tasks-dashboard.component';
import { TodoAPIService } from '../todo-api.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent {

  // declare the nbrTasks variable
  nbrTasks: number;

  constructor(private todoAPIService: TodoAPIService) {
    this.nbrTasks = 0;
  }
  
  ngOnInit() {
    this.nbrTasks = 0;
    // call the tasksNumber function from the todoAPIService service and assign the result to the nbrTasks variable
    this.todoAPIService.tasksNumber().then((data) => {
      this.nbrTasks = data
    });
  }

}
