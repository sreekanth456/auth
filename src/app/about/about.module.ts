import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { InfoComponent } from './info/info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InfoComponent, ContactUsComponent, InfoDetailsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  exports:[
    InfoComponent,ContactUsComponent
  ]
})
export class AboutModule { }
