import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentUser: any;
  apiVersion: string;
  ngVersion: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getApiSystemVersion().subscribe(res => {
      this.apiVersion = res.version;
    });
    this.ngVersion = this.authService.getNgSystemVersion();
  }

  /* if users is signed-in, this will display his name on the top */
  loggedIn() {
    this.currentUser = this.authService.currentUser;
    return this.authService.loggedIn();
  }

}
