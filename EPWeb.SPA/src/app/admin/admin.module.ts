import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AdminService } from '../_services/admin.service';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    UserListComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
