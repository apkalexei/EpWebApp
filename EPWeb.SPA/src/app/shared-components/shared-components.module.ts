// anngular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// 3RD party modules
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedComponentsModule { }