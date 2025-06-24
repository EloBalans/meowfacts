import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/cats/dashboard.component";
import {LoginComponent} from "./pages/login/login.component";
import {catsGuard} from "./guards/cats.guard";
import {loginGuard} from "./guards/login.guard";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [catsGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
];
