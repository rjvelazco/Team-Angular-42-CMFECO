import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Routing
import {ProfileRoutingModule} from './profile.routing';
// PrimerNg
import {PrimeModule} from '../../prime-module';
// Modules
import {PipeModule} from '../../pipe/pipe.module';
// Components
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {EventsComponent} from './components/events/events.component';
import {InsigniasComponent} from './components/insignias/insignias.component';
import {GroupsModule} from './components/groups/groups.module';


@NgModule({
  declarations: [
    InsigniasComponent,
    EventsComponent,
    MyProfileComponent,
    EditProfileComponent,
  ],
  exports: [
    MyProfileComponent,
    InsigniasComponent,
    EventsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    PrimeModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    GroupsModule,
    FormsModule,
  ]
})
export class ProfileModule {
}
