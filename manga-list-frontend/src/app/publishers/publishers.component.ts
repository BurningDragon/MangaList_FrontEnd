import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {Publisher} from "../models/publisher";
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  publishers: Publisher[] = [];
  filterTerm!: string;

  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  getPublishers():void{
    this.publisherService.getPublishers().subscribe(publishers => this.publishers = publishers);
  }

}
