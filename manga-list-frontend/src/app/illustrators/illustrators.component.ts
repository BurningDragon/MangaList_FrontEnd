import { Component, OnInit } from '@angular/core';
import { Illustrator } from '../models/illustrator';
import { IllustratorService } from '../services/illustrator.service';

@Component({
  selector: 'app-illustrators',
  templateUrl: './illustrators.component.html',
  styleUrls: ['./illustrators.component.css']
})
export class IllustratorsComponent implements OnInit {
  filterTerm!: string;
  illustrators: Illustrator[] = [];

  constructor(private illustratorService: IllustratorService) { }

  ngOnInit(): void {
    this.getIllustrators();
  }

  getIllustrators(){
    this.illustratorService.getIllustrators().subscribe(illustrators => this.illustrators = illustrators);
  }

}
