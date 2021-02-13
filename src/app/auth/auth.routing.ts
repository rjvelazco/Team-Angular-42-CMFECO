import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
