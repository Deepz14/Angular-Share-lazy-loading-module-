import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShareComponent } from './modal-share/modal-share.component';
// import { LazyModalModule } from '../lazy-modal/lazy-modal.module';


@NgModule({
  declarations: [ModalShareComponent],
  imports: [
    CommonModule
  ],
  exports : [ModalShareComponent]
})
export class SharedModule { }
