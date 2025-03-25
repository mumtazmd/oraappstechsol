import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultingOutsourcingComponent } from './ora-services/consulting-outsourcing/consulting-outsourcing.component';
import { UxUiDesignComponent } from './ora-services/ux-ui-design/ux-ui-design.component';
import { TrainingsComponent } from './ora-services/trainings/trainings.component';
import { ProjSupportComponent } from './ora-services/proj-support/proj-support.component';
import { GenAiComponent } from './ora-services/gen-ai/gen-ai.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JoblistComponent } from './joblist/joblist.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about-us',component:AboutUsComponent},
    {path: 'software-development',component:SoftwareDevelopmentComponent},
    {path: 'contact-us',component:ContactComponent},
    {path: 'ora-services/consulting-outsourcing',component:ConsultingOutsourcingComponent},
    {path: 'ora-services/ux-ui-design',component:UxUiDesignComponent},
    {path: 'ora-services/trainings',component:TrainingsComponent},
    {path: 'ora-services/proj-support',component:ProjSupportComponent},
    {path: 'ora-services/gen-ai',component:GenAiComponent},
    {path: 'job-detail/:id',component:JobDetailComponent},
    {path: 'job-list',component:JoblistComponent},
    // { 
    //     path: '', 
    //     loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
    // },
    // { 
    //     path: '', 
    //     loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent) 
    // },
];
