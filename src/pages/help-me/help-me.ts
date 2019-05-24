import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Example_1Page } from '../example-1/example-1';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-help-me',
  templateUrl: 'help-me.html'
})
export class HelpMePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) 
  
   { const browser = this.iab.create('https://www.visat.in/');}



  goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(Example_1Page);
  }
}
