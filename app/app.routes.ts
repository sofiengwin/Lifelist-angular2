import { provideRouter, RouterConfig }  from '@angular/router';
import { BucketlistComponent } from './bucketlist.component';
import { UserComponent } from './user.component';
import { UserFormComponent } from './registration.component';

const routes: RouterConfig = [
  {
     path: '',
     redirectTo: '/register',
     pathMatch: 'full'
   },
   {
     path: 'register',
     component: UserComponent
   },
   {
     path: 'bucketlist',
     component: BucketlistComponent
   },
   {
     path: 'new',
     component: UserFormComponent
   }
];

export const appRouterProviders = [
  provideRouter(routes)
];
