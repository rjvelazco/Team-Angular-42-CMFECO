import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubMenuComponent} from './components/sub-menu/sub-menu.component';


// Guard
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SubMenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule {
}
