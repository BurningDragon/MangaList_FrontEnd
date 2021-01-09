import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Illustrator } from '../models/illustrator';
import { Manga } from '../models/manga';
import { IllustratorService } from '../services/illustrator.service';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-illustrator-detail',
  templateUrl: './illustrator-detail.component.html',
  styleUrls: ['./illustrator-detail.component.css']
})
export class IllustratorDetailComponent implements OnInit {
  private id!: number;
  illustrator!: Illustrator;
  mangas: Manga[] = [];

  constructor(private illustratorService: IllustratorService, private route: ActivatedRoute, private mangaService:MangaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getIllustratorByID();
      this.getMangas();
    });
  }

  getIllustratorByID(){
    this.illustratorService.getIllustratorByID(this.id).subscribe(illustrator => this.illustrator = illustrator);
  }

  getMangas(){
    this.mangaService.getMangasByIllustratorID(this.id).subscribe(mangas => this.mangas = mangas);
  }

}
