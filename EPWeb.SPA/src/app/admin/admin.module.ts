import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AdminService } from '../_services/admin.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
