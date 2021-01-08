import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Manga } from '../models/manga';
import { Publisher } from '../models/publisher';
import { MangaService } from '../services/manga.service';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styleUrls: ['./publisher-detail.component.css']
})
export class PublisherDetailComponent implements OnInit {
  private id!: number;

  publisher: Publisher = {
    id: 1,name: 'Test', websiteURL: "test.com"
  }

  mangas: Manga[] = [];
  
  constructor(private route: ActivatedRoute, private publisherService:PublisherService, private mangaService: MangaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPulisherByID(this.id);
      this.getMangasForPublisher();
    })
  }

  getPulisherByID(id: number){
    this.publisherService.getPublisherByID(id).subscribe(publisher => this.publisher = publisher);
  }

  getMangasForPublisher(){
    this.mangaService.getMangasByPublisherID(this.id).subscribe(mangas => this.mangas = mangas);
  }

}
