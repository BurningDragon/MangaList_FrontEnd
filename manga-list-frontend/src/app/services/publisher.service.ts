import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from '../models/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private publisherURL = 'http://192.168.178.73:8080/publishers/'
  // private publisherURL = 'http://localhost:8080/publishers/'

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]>{
    return this.http.get<Publisher[]>(this.publisherURL);
  }

  getPublisherByID(id: number): Observable<Publisher>{
    const url = this.publisherURL + id;
    return this.http.get<Publisher>(url);
  }

}
