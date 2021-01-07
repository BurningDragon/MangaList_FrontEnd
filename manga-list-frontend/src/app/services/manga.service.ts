import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../models/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private mangasURL = "http://localhost:8080/mangas/"

  constructor(private http: HttpClient) { }

  getMangasByPublisherID(id: number){
    const url = this.mangasURL+ "by-publisher/" + id;
    return this.http.get<Manga[]>(url);
  }
}
