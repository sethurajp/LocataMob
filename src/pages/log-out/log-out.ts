import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html'
})



export class LogOutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public fAuth: AngularFireAuth) {

  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
}
}








