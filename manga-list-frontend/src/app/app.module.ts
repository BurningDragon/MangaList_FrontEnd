import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PublishersComponent } from './publishers/publishers.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { MangasComponent } from './mangas/mangas.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { IllustratorsComponent } from './illustrators/illustrators.component';
import { IllustratorDetailComponent } from './illustrator-detail/illustrator-detail.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PublishersComponent,
    PublisherDetailComponent,
    MangasComponent,
    MangaDetailComponent,
    AuthorsComponent,
    AuthorDetailComponent,
    IllustratorsComponent,
    IllustratorDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
