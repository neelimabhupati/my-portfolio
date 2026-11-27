import { Routes } from '@angular/router';
import { HomePage } from './main-content-homepage/home-page/home-page';
import { ProjectDetails } from './main-content-sub-detailpage/project-details/project-details';
import { Legalnotice } from './legalnotice/legalnotice';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'legal-notice', component: Legalnotice },
    { path: 'projects/:id', component: ProjectDetails },
];
