import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsigniasComponent} from './components/insignias/insignias.component';
import {GroupsComponent} from './components/groups/groups.component';
import {EventsComponent} from './components/events/events.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {PrimeModule} from '../../prime-module';
import {ProfileRoutingModule} from './profile.routing';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';





@NgModule({
  declarations: [
    InsigniasComponent,
    GroupsComponent,
    EventsComponent,
    MyProfileComponent,
    EditProfileComponent
  ],
  exports: [
    MyProfileComponent,
    InsigniasComponent,
    GroupsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    ProfileRoutingModule,
    FormsModule,
    CalendarModule,
    ButtonModule

  ]
})
export class ProfileModule {
}
