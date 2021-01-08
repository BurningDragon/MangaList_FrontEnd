import { Component, OnInit } from '@angular/core';
import { Manga } from '../models/manga';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {
  filterTerm!:string;
  mangas: Manga[] = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.getAllMangas();
  }

  getAllMangas(){
    this.mangaService.getAllMangas().subscribe(mangas => this.mangas = mangas);
  }

}
