import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { MeteoDashboardComponent } from './meteo-dashboard/meteo-dashboard.component';
import { TasksDashboardComponent } from './tasks-dashboard/tasks-dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    HomeDashboardComponent,
    MenuDashboardComponent,
    MeteoDashboardComponent,
    TasksDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Utilisation des routes dans l'application
  ],
  providers: [],
  bootstrap: []  // AppComponent est le composant racine de l'application
})
export class AppModule { }
