import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfilListComponent } from './modules/user-profils/user-profil-list/user-profil-list.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'users', component: UserListComponent },
  { path: 'profils', component: UserProfilListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
