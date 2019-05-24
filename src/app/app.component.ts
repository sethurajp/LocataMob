import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocataSupportPage } from '../pages/locata-support/locata-support';

import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { HelpMePage } from '../pages/help-me/help-me';
import { BusDetailsPage } from '../pages/bus-details/bus-details';
import { BusNo16Page } from '../pages/bus-no16/bus-no16';
import { BusTimingNo16Page } from '../pages/bus-timing-no16/bus-timing-no16';
import { BusDriverNo16Page } from '../pages/bus-driver-no16/bus-driver-no16';
import { StaffDetailsBusNo16Page } from '../pages/staff-details-bus-no16/staff-details-bus-no16';
import { StudentsDetailsBusNo16Page } from '../pages/students-details-bus-no16/students-details-bus-no16';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { RouteMapPage } from '../pages/route-map/route-map';


import { LoginPage } from '../pages/login/login';
import { Example_1Page } from '../pages/example-1/example-1';
import { HomempPage } from '../pages/homemp/homemp';
import { AngularFireDatabase } from 'angularfire2/database';
import { LogOutPage } from '../pages/log-out/log-out';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLocataSupport(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LocataSupportPage);
  }goToMapView(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Example_1Page);
  }goToTermsAndConditions(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TermsAndConditionsPage);
  }goToHelpMe(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HelpMePage);
  }goToBusDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BusDetailsPage);
  }goToBusNo16(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BusNo16Page);
  }goToBusTimingNo16(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BusTimingNo16Page);
  }goToBusDriverNo16(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BusDriverNo16Page);
  }goToStaffDetailsBusNo16(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StaffDetailsBusNo16Page);
  }goToStudentsDetailsBusNo16(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StudentsDetailsBusNo16Page);
  }goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomempPage);
  }goToRouteMap(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RouteMapPage);
  }
  goToLogOut(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LogOutPage);
  }
}
