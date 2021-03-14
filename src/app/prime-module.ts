import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AccordionModule} from 'primeng/accordion';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TagModule} from 'primeng/tag';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {BadgeModule} from 'primeng/badge';
import {DataViewModule} from 'primeng/dataview';
import {ChipModule} from 'primeng/chip';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    TabViewModule,
    CardModule,
    RippleModule,
    DividerModule,
    CheckboxModule,
    CarouselModule,
    AvatarModule,
    AvatarGroupModule,
    AccordionModule,
    ScrollPanelModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    TagModule,
    MenuModule,
    BadgeModule,
    DataViewModule,
    ChipModule,
    MultiSelectModule,
    TableModule,
  ]
})
export class PrimeModule {
}
