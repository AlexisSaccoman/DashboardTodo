import { Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MailsViewComponent } from './mails-view/mails-view.component';

export const routes: Routes = [
    {path: '', component: HomeDashboardComponent },
    {path: 'Mails', component: MailsViewComponent },
];
