import { Component } from '@angular/core';
import { TodoAPIService } from '../todo-api.service';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrl: './tasks-dashboard.component.scss'
})
export class TasksDashboardComponent {

  tasksToday: any;

  constructor(private todoAPIService: TodoAPIService) {
  }

  ngOnInit() {
    this.todoAPIService.tasksToday().then((data) => { // list of tasks dued today
      this.tasksToday = data
    });
  }

}
