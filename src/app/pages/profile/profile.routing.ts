import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubMenuComponent} from './components/sub-menu/sub-menu.component';
// Guard
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: SubMenuComponent,
    children: [
      {path: '', component: MyProfileComponent},
      {path: 'editar', component: EditProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule {
}
