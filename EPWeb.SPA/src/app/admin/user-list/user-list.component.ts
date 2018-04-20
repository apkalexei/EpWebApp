import { UserToList } from './../../_models/user/UserToList';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { NotifyService } from '../../_services/notify.service';
import { AuthService } from '../../_services/auth.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  UsersToAllow: UserToList[];
  AllUsers: UserToList[];

  constructor(
    private adminService: AdminService,
    private notifyService: NotifyService,
    private authService: AuthService) {}

  ngOnInit() {

    this.adminService
      .getNotAllowedUsers()
      .subscribe(res => {
        this.UsersToAllow = res;
      }, error => {
        this.notifyService.error('Could not retrieve list of users to allow. Try again.');
      });

    this.adminService
      .getAllUsers()
      .subscribe(res => {
        this.AllUsers = res;
        this.removeCurrentUserFromList();
      }, error => {
        this.notifyService.error('Could not retrieve list of all users. Try again.');
      });
      console.log(this.UsersToAllow);
      console.log(this.AllUsers);
  }

  allowUser(user: UserToList) {
    this.adminService
      .allowUser(user.id)
      .subscribe(res => {
        this.notifyService.success('User ' + user.username + ' allowed.');
        this.removeUserFromUsersToAllow(user.id);
        console.log(this.UsersToAllow);
      }, error => {
        this.notifyService.error(error);
      });
  }

  changePassword() {
    this.notifyService.error('Not implemented exception. (client side)');
  }

  deleteUser(user: UserToList) {

    if (confirm("Are you sure?")) {
      this.adminService
        .deleteUser(user.id)
        .subscribe(res => {
          this.notifyService.success('User ' + user.username + ' deleted.');
          this.removeUserFromAllUsers(user.id);
          this.removeUserFromUsersToAllow(user.id);
        })
    }
  }

  isUserListEmpty() {
    if (this.UsersToAllow.length < 1)
        return true;
    return false;
  }

  private removeUserFromAllUsers(userId: number) {
    let index = this.AllUsers.findIndex(u => u.id == userId);
    this.AllUsers.splice(index, 1);
  }

  private removeUserFromUsersToAllow(userId: number) {
    let index = this.UsersToAllow.findIndex(u => u.id == userId);
    this.UsersToAllow.splice(index, 1);
  }

  private removeCurrentUserFromList() {
    let userId = this.authService.currentUser.id;
    let index = this.AllUsers.findIndex(u => u.id == userId);
    this.AllUsers.splice(index, 1);
  }

}
