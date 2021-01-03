import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishersComponent } from './publishers/publishers.component';

const routes: Routes = [{path: 'publishers', component: PublishersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
