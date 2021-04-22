import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  loginFailed = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.username, this.password).subscribe(d =>{
      this.loginFailed = false;

      let user = {id: d.id, username: d.username, email: d.email};
      let token = d.tokenType + d.accessToken;
 
      sessionStorage.setItem("userID", user.id);
      sessionStorage.setItem("username", user.username);
      sessionStorage.setItem("Token", token);

      this.username = "";
      this.password = "";
    
    }, e =>{
      this.loginFailed = true;
    });
  }

}
