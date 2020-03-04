import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetPageComponent } from './component/bet-page/bet-page.component';

const routes: Routes = [ { path: 'betPage', component: BetPageComponent },
{ path: '',   redirectTo: '/betPage',  pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
