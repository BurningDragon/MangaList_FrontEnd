import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '../models/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private mangasURL = "http://192.168.178.73:8080/mangas/"
  // private mangasURL = "http://localhost:8080/mangas/"

  constructor(private http: HttpClient) { }

  getMangasByPublisherID(id: number){
    const url = this.mangasURL+ "by-publisher/" + id;
    return this.http.get<Manga[]>(url);
  }

  getAllMangas(): Observable<Manga[]>{
    return this.http.get<Manga[]>(this.mangasURL);
  }

  getMangaByID(id: number){
    const url = this.mangasURL + id;
    return this.http.get<Manga>(url);
  }

  getMangasByAuthorID(id:number){
    const url = this.mangasURL+ "by-author/" + id;
    return this.http.get<Manga[]>(url);
  }

  getMangasByIllustratorID(id:number){
    const url = this.mangasURL+ "by-illustrator/" + id;
    return this.http.get<Manga[]>(url);
  }
}
