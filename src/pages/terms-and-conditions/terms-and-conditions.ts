import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Example_1Page } from '../example-1/example-1';


@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html'
})
export class TermsAndConditionsPage {

  constructor(public navCtrl: NavController) {
  }
  goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(Example_1Page);
  }
}
