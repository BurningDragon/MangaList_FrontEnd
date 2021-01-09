import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { Manga } from '../models/manga';
import { AuthorService } from '../services/author.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  private id!:number;

  author!: Author;
  mangas: Manga[] = [];

  constructor(private authorService:AuthorService, private route: ActivatedRoute, private mangaService:MangaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAuthorByID();
      this.getMangas();
    });
  }

  getAuthorByID(){
    this.authorService.getAuthorByID(this.id).subscribe(author => this.author = author);
  }

  getMangas(){
    this.mangaService.getMangasByAuthorID(this.id).subscribe(mangas => this.mangas = mangas);
  }



}
