import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { MeteoDashboardComponent } from './meteo-dashboard/meteo-dashboard.component';
import { TasksDashboardComponent } from './tasks-dashboard/tasks-dashboard.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { MailsViewComponent } from './mails-view/mails-view.component';



@NgModule({
  declarations: [
    HomeDashboardComponent,
    MenuDashboardComponent,
    MeteoDashboardComponent,
    TasksDashboardComponent,
    CalendarViewComponent,
    SettingsViewComponent,
    MailsViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Utilisation des routes dans l'application
  ],
  providers: [],
  bootstrap: []  // AppComponent est le composant racine de l'application
})
export class AppModule { }
