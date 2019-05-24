import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from './signin/signin';
import { Example_1Page } from '../example-1/example-1';

@Component({
  selector: 'page-locata-support',
  templateUrl: 'locata-support.html'
})
export class LocataSupportPage {

  constructor(public navCtrl: NavController) {
  }
  goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(Example_1Page);
  }
    goToSigninPage(params){
      if (!params) params = {};
      this.navCtrl.push(SigninPage);
  }
}
