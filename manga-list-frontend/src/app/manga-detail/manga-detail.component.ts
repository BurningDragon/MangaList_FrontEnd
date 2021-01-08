import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Manga } from '../models/manga';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {
  private id!:number;
  manga!: Manga;
  constructor(private mangaService: MangaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getMangaByID();
    });
  }

  getMangaByID(){
    this.mangaService.getMangaByID(this.id).subscribe(manga => this.manga = manga);
  }

}
