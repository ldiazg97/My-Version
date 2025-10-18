import { Routes } from '@angular/router';
import { Subscriptions } from './domains/seoWebmas/UserSection/subscriptions/subscriptions';
import { Users } from './domains/user-control/users';
import { Websites } from './domains/seoWebmas/UserSection/websites/websites';

export const routes: Routes = [
  {
    path: 'suscripcion/listado',
    component: Subscriptions
  },
  {
    path: 'sitios',
    component: Websites
  },
  {
    path: 'perfil',
    component: Users
  }
];
