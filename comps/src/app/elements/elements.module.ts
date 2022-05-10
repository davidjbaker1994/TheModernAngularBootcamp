import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Given that SharedModule is now imported here, any component defined in 'elements' directory
//can access / make reference to any component defined in the 'shared' directory
import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
