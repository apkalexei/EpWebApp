import { AuthComponent } from './auth/auth.component';
// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/';
import { HttpClientModule } from '@angular/common/http';


//devextreme modules
import { DxSchedulerModule, DxResponsiveBoxModule, DxTemplateModule, DxButtonModule } from 'devextreme-angular';

// custom modules
import { RoutingModule } from './routing.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

// custom components
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SearchComponent } from './search/search.component';

// custom services
import { ResourceService } from './_services/resource.service';
import { FilterService } from './_services/filter.service';
import { AdaptService } from './_services/adapt.service';
import { AuthService } from './_services/auth.service';
import { NotifyService } from './_services/notify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

// custom guards
import { AuthGuard } from './_guards/auth.guard';

// 3RD party modules
import { BsDatepickerModule, TabsModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

// JWT config
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SchedulerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DxSchedulerModule,
    DxResponsiveBoxModule,
    DxTemplateModule,
    DxButtonModule,
    SharedComponentsModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000']
      }
    })
  ],
  providers: [
    ResourceService,
    FilterService,
    AdaptService,
    AuthService,
    AuthGuard,
    NotifyService,
    DatePipe,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
