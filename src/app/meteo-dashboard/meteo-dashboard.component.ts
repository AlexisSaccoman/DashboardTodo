import { Component } from '@angular/core';
import { MeteoAPIService } from '../meteo-api.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs';

@Component({
  selector: 'app-meteo-dashboard',
  templateUrl: './meteo-dashboard.component.html',
  styleUrl: './meteo-dashboard.component.scss'
})
export class MeteoDashboardComponent {

  meteoData: any;
  meteoDesc: string = "";
  icon_meteo: string = "sunny";
  icons_list:string[] = ["sunny", "cloud", "rainy", "thunderstorm", "cloudy_snowing", "foggy"];
  temp: number = 99;
  position: any;
  loading: boolean = true; // Initialiser à true pour afficher le loading
  done: boolean = false;

  constructor(private meteoAPI: MeteoAPIService, private readonly geolocation$: GeolocationService) { }

  ngOnInit() {
    this.getPosition();
  }

  checkImgMeteo() {
    console.log(this.meteoDesc);
    return "";
  }

  async getPosition() {
    this.geolocation$.pipe(take(1)).subscribe(position => {
      this.position = position;
      this.getMeteo(this.position.coords.latitude, this.position.coords.longitude);
    });
  }

  async getMeteo(lat: any, lon: any) {

    if(this.done==true){
      return;
    }

    this.loading = true;  // Activer le chargement

    this.meteoAPI.getMeteoByCoord(lat, lon).then((data) => {
      console.log(data);
      this.meteoData = data;
      this.temp = Math.round((this.meteoData.main.temp - 273.15) * 10) / 10;
      this.meteoDesc = this.meteoData.weather[0].description;  // Utiliser l'indice 0
      this.loading = false; // Désactiver le chargement une fois les données récupérées
    }).catch(err => {
      console.error('Erreur lors de la récupération de la météo', err);
      this.loading = false; // Désactiver le chargement en cas d'erreur
      this.done = true;
    });

    this.checkImgMeteo();
  }
}
