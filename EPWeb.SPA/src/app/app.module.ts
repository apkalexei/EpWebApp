// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/';


//devextreme modules
import { DxSchedulerModule, DxResponsiveBoxModule } from 'devextreme-angular';

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

// custom guards
import { AuthGuard } from './_guards/auth.guard';

// 3RD party modules
import { BsDatepickerModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';


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
    BsDatepickerModule.forRoot()
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
