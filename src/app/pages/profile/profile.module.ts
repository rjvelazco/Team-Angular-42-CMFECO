import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Routing
import { ProfileRoutingModule } from './profile.routing';

// PrimerNg
import { PrimeModule } from '../../prime-module';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

// Modules
import { PipeModule } from '../../pipe/pipe.module';
import {CardModule} from 'primeng/card';


// Components
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { EventsComponent } from './components/events/events.component';
import { GroupsComponent } from './components/groups/groups.component';
import { InsigniasComponent } from './components/insignias/insignias.component';



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
    ButtonModule,
    CalendarModule,
    CommonModule,
    FormsModule,
    PipeModule,
    PrimeModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    CardModule
  ]
})
export class ProfileModule {
}
