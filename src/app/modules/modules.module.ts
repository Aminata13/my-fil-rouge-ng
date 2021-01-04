import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserProfilListComponent } from './user-profils/user-profil-list/user-profil-list.component';



@NgModule({
  declarations: [UserListComponent, UserProfilListComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
