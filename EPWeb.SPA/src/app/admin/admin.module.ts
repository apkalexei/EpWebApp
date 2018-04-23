// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom components
import { UserListComponent } from './user-list/user-list.component';

// custom services
import { AdminService } from '../_services/admin.service';

// 3RD party modules
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
