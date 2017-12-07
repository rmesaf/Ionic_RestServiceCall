import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService} from '../../providers/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {
      this.getUsuarios();
  }

  getUsuarios(){
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

  
}