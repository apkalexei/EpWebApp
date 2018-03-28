import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.currentUser = this.authService.currentUser;
    return this.authService.loggedIn();
  }

}
