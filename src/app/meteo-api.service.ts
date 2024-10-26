import { Injectable } from '@angular/core';

/*

  API key : ddd2934d2126bf435df4dda02be04d1a
  API link : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  André malraux
  lat : latitude => 43.91097
  lon : longitude => 4.89041

*/

@Injectable({
  providedIn: 'root'
})
export class MeteoAPIService {

  constructor() { }

  // Fonction pour récupérer la météo d'André Malraux
  async getMeteo(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.91097&lon=4.89041&appid=ddd2934d2126bf435df4dda02be04d1a')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  // Fonction pour récupérer la météo d'une ville selon la latitude et la longitude
  async getMeteoByCoord(lat:any, lon:any){
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=ddd2934d2126bf435df4dda02be04d1a')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
