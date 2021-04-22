import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {username: "", password : "", email:"", id : undefined}
  registered: boolean = false;
  data: any;
  usernameEmpty = false;
  passwordEmpty = false;
  emailEmpty = false;
  showWrongFields = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public register(){
    console.log(this.user.username);
    console.log(this.user);

    if(!this.vaildateForm()){
      this.showWrongFields = true;
    } else{
      this.showWrongFields = false;

      this.userService.register(this.user).subscribe(d=> {
        this.data = d;

        console.log(this.data);

        if(this.data.message === "User registered successfully!"){
          this.registered = true;
          this.user.username = "";
          this.user.email = "";
          this.user.password= "";
        }

        console.log(this.registered);
      });
    }
  
  }

  private vaildateForm() : boolean{
      if(this.user.username === ""){
        this.usernameEmpty = true;
      }else{
        this.usernameEmpty = false;
      }

      if(this.user.email === "" || !this.user.email.match(/[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9A-Z](?:[a-z0-9A-Z]*[a-z0-9A-Z])?\.)+[a-z0-9A-Z](?:[a-z0-9A-Z]*[a-z0-9A-Z])?/)){
        this.emailEmpty = true;
      }else{
        this.emailEmpty = false;
      }

      if(this.user.password === ""){
        this.passwordEmpty = true;
      }else{
        this.passwordEmpty = false;
      }

      if(this.usernameEmpty || this.emailEmpty || this.passwordEmpty){
        return false; //Not valid
      }

      return true; //valid
  }

}
