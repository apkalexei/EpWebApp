// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// custom components
import { UserListComponent } from './user-list/user-list.component';

// custom services
import { AdminService } from '../_services/admin.service';

// 3RD party modules
import { TabsModule, PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    UserListComponent
],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
