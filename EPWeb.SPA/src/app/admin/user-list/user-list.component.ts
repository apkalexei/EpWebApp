import { UserToAllow } from './../../_models/user/UserToAllow';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { NotifyService } from '../../_services/notify.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Users: UserToAllow[];

  constructor(private adminService: AdminService, private notifyService: NotifyService) { }

  ngOnInit() {

    this.adminService
      .getNotAllowedUsers()
      .subscribe(res => {
        this.Users = res;
      }, error => {
        this.notifyService.error('Could not retrieve list of users. Try again.');
      });

  }

  allowUser(user: UserToAllow) {

    this.adminService
      .allowUser(user.id)
      .subscribe(res => {
        this.notifyService.success('User ' + user.username + ' allowed.');
        let index = this.Users.findIndex(u => u.id == user.id);
        this.Users.splice(index, 1);
      }, error => {
        this.notifyService.error(error);
      });
  }

}
