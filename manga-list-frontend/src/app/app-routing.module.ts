import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { MangasComponent } from './mangas/mangas.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublishersComponent } from './publishers/publishers.component';

const routes: Routes = [
  {path: 'publishers/:id', component:PublisherDetailComponent},
  {path: 'publishers', component: PublishersComponent},
  {path: 'mangas/:id', component:MangaDetailComponent},
  {path: 'mangas', component: MangasComponent},
  {path: '', redirectTo: '/mangas', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
