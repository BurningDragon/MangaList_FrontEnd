import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Illustrator } from '../models/illustrator';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IllustratorService {
  private illustratorURL = "http://192.168.178.73:8080/illustrators/"

  constructor(private http: HttpClient) { }

  getIllustrators(): Observable<Illustrator[]>{
    return this.http.get<Illustrator[]>(this.illustratorURL);
  }

  getIllustratorByID(id: number):Observable<Illustrator>{
    const url = this.illustratorURL + id;
    return this.http.get<Illustrator>(url);
  }
}
