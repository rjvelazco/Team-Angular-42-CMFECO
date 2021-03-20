import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyGroupComponent} from './components/my-group/my-group.component';
import {GroupsAvailableComponent} from './components/groups-available/groups-available.component';
import {GroupsComponent} from './components/groups/groups.component';
import {PrimeModule} from '../../../../prime-module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '../../../../pipe/pipe.module';


@NgModule({
  declarations: [
    MyGroupComponent,
    GroupsAvailableComponent,
    GroupsComponent
  ],
  exports: [
    GroupsComponent
  ],
    imports: [
        CommonModule,
        PrimeModule,
        FormsModule,
        PipeModule
    ]
})
export class GroupsModule {
}
