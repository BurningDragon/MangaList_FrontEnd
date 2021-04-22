import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manga-list-frontend';
  username:string = '';

  getUsername(): string {
    this.username = sessionStorage.getItem("username")?.toString() || "";
    return this.username;
  }

  logout(){
    sessionStorage.clear();
  }
}
