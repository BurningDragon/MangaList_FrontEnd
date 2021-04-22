import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'http://192.168.178.73:8080/users/'
  private authURL = 'http://192.168.178.73:8080/auth/'
  // private publisherURL = 'http://localhost:8080/publishers/'

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<User[]>{
    return this.http.get<User[]>(this.userURL);
  }

  getPublisherByID(id: number): Observable<User>{
    const url = this.userURL + id;
    return this.http.get<User>(url);
  }

  register(user: User) : Observable<any>{
    const url = this.authURL + "signup";
    return this.http.post<any>(url, user);
  }
}
