import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModalComponent } from './lazy-modal/lazy-modal.component';
const routes: Routes = [
  {path : '', component : LazyModalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModalRoutingModule { }
export const routingComponent = [LazyModalComponent]
