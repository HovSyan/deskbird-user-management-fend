import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserListPageComponent } from './pages/protected-pages/user-list-page/user-list-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProtectedPagesComponent } from './pages/protected-pages/protected-pages.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: ProtectedPagesComponent,
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
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
