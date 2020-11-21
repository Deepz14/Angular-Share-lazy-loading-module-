import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModalTwoComponent } from './modal-two/modal-two.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {
    path : 'lazy-modal', loadChildren : () => import('./lazy-modal/lazy-modal.module')
    .then(mod => mod.LazyModalModule)
  },
  {path : 'modal-two', component : ModalTwoComponent},
  {path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ModalTwoComponent]
