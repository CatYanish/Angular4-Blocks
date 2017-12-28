import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from "./person-details/person-details.component";



const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
