import { Component } from '@angular/core';
import { MeteoAPIService } from '../meteo-api.service';

@Component({
  selector: 'app-meteo-dashboard',
  templateUrl: './meteo-dashboard.component.html',
  styleUrl: './meteo-dashboard.component.scss'
})
export class MeteoDashboardComponent {

  meteoData: any;

  constructor(private meteoAPI: MeteoAPIService) {
  }

  ngOnInit() {
    this.meteoAPI.getMeteo().then((data) => { // list of tasks dued today
      console.log(data);
      this.meteoData = data
    });
  }
}
