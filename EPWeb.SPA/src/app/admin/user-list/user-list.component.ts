import { Pagination } from './../../_models/system/pagination';
import { UserToList } from './../../_models/user/UserToList';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { NotifyService } from '../../_services/notify.service';
import { AuthService } from '../../_services/auth.service';
import { Alert } from 'selenium-webdriver';
import { PaginatedResult} from '../../_models/system/pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersToAllow: UserToList[];
  notAllowedUsersPagination: Pagination;
  allUsers: UserToList[];
  allUsersPagination: Pagination;

  constructor(
    private adminService: AdminService,
    private notifyService: NotifyService,
    private authService: AuthService) { }

  ngOnInit() {
    this.adminService.getAllUsers(1, 10).subscribe((result: PaginatedResult<UserToList[]>) => {
      this.allUsers = result.result;
      this.allUsersPagination = result.pagination;
    }, error => {
      this.notifyService.error('Could not retrieve list of all users. Try again.');
    })

    this.adminService.getAllUsers(1, 10, true).subscribe((result: PaginatedResult<UserToList[]>) => {
      this.usersToAllow = result.result;
      this.notAllowedUsersPagination = result.pagination;
    }, error => {
      this.notifyService.error('Could not retrieve list of users to allow. Try again.');
    })
  }

  /* Pagination methods for usersToAllow list */

  usersToAllowPageChanged(event: any): void {
    this.notAllowedUsersPagination.currentPage = event.page;
    this.usersToAllowLoadUsers();
  }

  usersToAllowLoadUsers() {
    this.adminService
      .getAllUsers(this.notAllowedUsersPagination.currentPage, this.notAllowedUsersPagination.itemsPerPage)
      .subscribe((res: PaginatedResult<UserToList[]>) => {
        this.usersToAllow = res.result;
        this.notAllowedUsersPagination = res.pagination;
      }, error => {
        this.notifyService.error('Could not retrieve list of users to allow. Try again.');
      });
  }

  /* Pagination methods for allUsers list */

  allUsersPageChanged(event: any): void {
    this.allUsersPagination.currentPage = event.page;
    this.allUsersLoadUsers();
  }

  allUsersLoadUsers() {
    this.adminService
      .getAllUsers(this.allUsersPagination.currentPage, this.allUsersPagination.itemsPerPage)
      .subscribe((res: PaginatedResult<UserToList[]>) => {
        this.allUsers = res.result;
        this.allUsersPagination = res.pagination;
      }, error => {
        this.notifyService.error('Could not retrieve list of all users. Try again.');
      });
  }

  /* List operation methods */

  allowUser(user: UserToList) {
    this.adminService
      .allowUser(user.id)
      .subscribe(res => {
        this.notifyService.success('User ' + user.username + ' allowed.');
        this.removeUserFromUsersToAllow(user.id);
      }, error => {
        this.notifyService.error(error);
      });
  }

  deleteUser(user: UserToList) {
    if (confirm("Are you sure?")) {
      this.adminService
        .deleteUser(user.id)
        .subscribe(res => {
          this.notifyService.success('User ' + user.username + ' deleted.');
          this.removeUserFromAllUsers(user.id);
          this.removeUserFromUsersToAllow(user.id);
        });
    }
  }

  changePassword() {
    this.notifyService.error('Not implemented exception. (client side)');
  }

  /* Helper methods for main methods */

  private removeUserFromAllUsers(userId: number) {
    let index = this.allUsers.findIndex(u => u.id == userId);
    this.allUsers.splice(index, 1);
  }

  private removeUserFromUsersToAllow(userId: number) {
    let index = this.usersToAllow.findIndex(u => u.id == userId);
    this.usersToAllow.splice(index, 1);
  }

  private isUserCurrentUser(userId: number): boolean {
    return userId == this.authService.currentUser.id;
  }

  private removeCurrentUserFromList() {
    let index = this.allUsers.findIndex(u => this.isUserCurrentUser(u.id));
    this.allUsers.splice(index, 1);
  }

}
