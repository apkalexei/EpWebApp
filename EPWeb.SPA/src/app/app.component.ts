import { AuthService } from './_services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { NavigationEnd } from "@angular/router";
import { DxResponsiveBoxComponent } from "devextreme-angular/ui/responsive-box";
import { AdaptService } from './_services/adapt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  adaptOptions: any;

  @ViewChild(DxResponsiveBoxComponent) box: DxResponsiveBoxComponent;

  constructor(private adaptService: AdaptService, private authService: AuthService) {

    this.adaptService.adapt$.subscribe(item => {
      this.adaptOptions = this.adaptService.getOptionsForAdaptation(item);
    });

  }

  adaptation() {
    this.adaptService.setAdaptValue();
  }

  ngOnInit() {
    this.adaptation();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = token;
    }
    if (user) {
      this.authService.currentUser = user;
    }
  }
}
