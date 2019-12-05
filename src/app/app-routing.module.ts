import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomPreloadService } from './service/custom-preload.service';


const routes: Routes = [

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',loadChildren:'./user/user.module#UserModule'},
  {path:'about',data:{preload:true},loadChildren:'./about/about.module#AboutModule'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
