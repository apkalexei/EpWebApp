import { NotifyService } from './../../_services/notify.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;


  constructor(private authService: AuthService, private router: Router, private notifyService: NotifyService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  logout() {
    this.authService.userToken = null;
    this.authService.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    this.notifyService.success("Logged out.");
    this.router.navigate(["/auth"]);
  }

  /* if users is signed-in, this will display his name on the bottom (for phones) */
  loggedIn() {
    this.currentUser = this.authService.currentUser;
    return this.authService.loggedIn();
  }

  /* if user has admin permissions, this will allow him to see administration button */
  isAdmin() {
    return this.authService.isAdmin();
  }

}
