import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusNo16Page } from '../bus-no16/bus-no16';
import { BusTimingNo16Page } from '../bus-timing-no16/bus-timing-no16';
import { BusDriverNo16Page } from '../bus-driver-no16/bus-driver-no16';
import { StaffDetailsBusNo16Page } from '../staff-details-bus-no16/staff-details-bus-no16';
import { BusDetailsPage } from '../bus-details/bus-details';
import { Example_1Page } from '../example-1/example-1';

@Component({
  selector: 'page-students-details-bus-no16',
  templateUrl: 'students-details-bus-no16.html'
})
export class StudentsDetailsBusNo16Page {

  constructor(public navCtrl: NavController) {
  }
  goToBusNo16(params){
    if (!params) params = {};
    this.navCtrl.push(BusNo16Page);
  }goToBusTimingNo16(params){
    if (!params) params = {};
    this.navCtrl.push(BusTimingNo16Page);
  }goToBusDriverNo16(params){
    if (!params) params = {};
    this.navCtrl.push(BusDriverNo16Page);
  }goToStaffDetailsBusNo16(params){
    if (!params) params = {};
    this.navCtrl.push(StaffDetailsBusNo16Page);
  }goToStudentsDetailsBusNo16(params){
    if (!params) params = {};
    this.navCtrl.push(StudentsDetailsBusNo16Page);
  }goToBusDetails(params){
    if (!params) params = {};
    this.navCtrl.push(BusDetailsPage);
  }goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(Example_1Page);
  }
}
