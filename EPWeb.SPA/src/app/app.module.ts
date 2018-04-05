// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/';
import { HttpClientModule } from '@angular/common/http';


//devextreme modules
import { DxSchedulerModule, DxResponsiveBoxModule } from 'devextreme-angular';

// custom modules
import { RoutingModule } from './routing.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

// custom components
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

// custom services
import { ResourceService } from './_services/resource.service';
import { FilterService } from './_services/filter.service';
import { AdaptService } from './_services/adapt.service';
import { AuthService } from './_services/auth.service';
import { NotifyService } from './_services/notify.service';

// custom guards
import { AuthGuard } from './_guards/auth.guard';

// 3RD party modules
import { BsDatepickerModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

// JWT config

export function getAccessToken(): string {
  return localStorage.getItem('token');
}
export const jwtConfig = {
  tokenGetter: getAccessToken,
  whiteListedDomains: ['localhost:5000']
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SchedulerComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DxSchedulerModule,
    DxResponsiveBoxModule,
    SharedComponentsModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    JwtModule.forRoot({
      config: jwtConfig
    })
  ],
  providers: [
    ResourceService,
    FilterService,
    AdaptService,
    AuthService,
    AuthGuard,
    NotifyService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
