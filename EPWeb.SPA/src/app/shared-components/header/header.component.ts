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
  }

  loggedIn() {
    this.currentUser = this.authService.currentUser;
    return this.authService.loggedIn();
  }

  logout() {
    this.notifyService.success("Logged out.");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }

}
