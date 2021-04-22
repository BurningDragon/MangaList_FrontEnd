import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorsComponent } from './authors/authors.component';
import { IllustratorDetailComponent } from './illustrator-detail/illustrator-detail.component';
import { IllustratorsComponent } from './illustrators/illustrators.component';
import { LoginComponent } from './login/login.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { MangasComponent } from './mangas/mangas.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublishersComponent } from './publishers/publishers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'publishers/:id', component:PublisherDetailComponent},
  {path: 'publishers', component: PublishersComponent},
  {path: 'mangas/:id', component:MangaDetailComponent},
  {path: 'mangas', component: MangasComponent},
  {path: 'authors/:id', component: AuthorDetailComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'illustrators/:id', component: IllustratorDetailComponent},
  {path: 'illustrators', component: IllustratorsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/mangas', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
