import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService} from '../../providers/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //users: any[] = [];
  users: any;
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};

  constructor(public navCtrl: NavController, public userService: UserService) {
      this.getUsers();
  }

  // Event Submit
  saveUser(){
    this.userService.setUsers_(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


  getUsers(){
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  getUsers_(){
    this.userService.getUsers_()
    .then(data => {
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  
}