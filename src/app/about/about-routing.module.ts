import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoDetailsComponent } from './info-details/info-details.component';


const routes: Routes = [

  {path:'info',component:InfoComponent},
  {path:'info/:id',component:InfoDetailsComponent},
  {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
