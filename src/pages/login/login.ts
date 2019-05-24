import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { User } from '../../app/models/user';


import { Example_1Page } from '../example-1/example-1';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  [x: string]: any;
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  async login(user: User){
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result) {
     this.navCtrl.setRoot(Example_1Page)
    }
  }
  catch (e) {
    console.error(e);
  }
    }

   
    
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);}

}
