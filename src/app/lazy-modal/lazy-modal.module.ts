import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModalRoutingModule, routingComponent } from './lazy-modal-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [routingComponent],
  imports: [
    CommonModule,
    SharedModule,
    LazyModalRoutingModule
  ],
  exports : [SharedModule]
})
export class LazyModalModule { }
