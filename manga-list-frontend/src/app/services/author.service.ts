import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorURL = "http://localhost:8080/authors/"
  
  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.authorURL);
  }
}
