import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPageComponent } from './dahsboard-page/dahsboard-page.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'login', component :LoginPageComponent},
  {path:'dashboard', component: DahsboardPageComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo: "login"}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
