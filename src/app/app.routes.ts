import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProtectedPagesComponent } from './protected-pages/protected-pages.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: '',
    component: ProtectedPagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UserListPageComponent,
      },
    ],
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
];
