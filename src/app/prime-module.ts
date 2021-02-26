import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';

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
  ]
})
export class PrimeModule {
}
