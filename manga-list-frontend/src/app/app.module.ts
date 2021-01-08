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

@NgModule({
  declarations: [
    AppComponent,
    PublishersComponent,
    PublisherDetailComponent,
    MangasComponent,
    MangaDetailComponent
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
