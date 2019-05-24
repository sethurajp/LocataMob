import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { BusDetailsPage } from '../pages/bus-details/bus-details';
import { BusNo16Page } from '../pages/bus-no16/bus-no16';
import { BusTimingNo16Page } from '../pages/bus-timing-no16/bus-timing-no16';
import { BusDriverNo16Page } from '../pages/bus-driver-no16/bus-driver-no16';
import { StaffDetailsBusNo16Page } from '../pages/staff-details-bus-no16/staff-details-bus-no16';
import { StudentsDetailsBusNo16Page } from '../pages/students-details-bus-no16/students-details-bus-no16';
import { HelpMePage } from '../pages/help-me/help-me';
import { RouteMapPage } from '../pages/route-map/route-map';
import { LocataSupportPage } from '../pages/locata-support/locata-support';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';



import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from "angularfire2/database";

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { HomePage } from '../pages/locata-support/home/home';
import { SigninPage } from '../pages/locata-support/signin/signin';
import { RoomPage } from '../pages/locata-support/room/room';
import { AddRoomPage } from '../pages/locata-support/add-room/add-room';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { Example_1Page } from '../pages/example-1/example-1';
import { HomempPage } from '../pages/homemp/homemp';
import { LogOutPage } from '../pages/log-out/log-out';

@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,

    LoginPage,
    SignupPage,
    MyProfilePage,
    BusDetailsPage,
    BusNo16Page,
    BusTimingNo16Page,
    BusDriverNo16Page,
    StaffDetailsBusNo16Page,
    StudentsDetailsBusNo16Page,
    HelpMePage,
    RouteMapPage,
    LocataSupportPage,
    TermsAndConditionsPage,
    LogOutPage,
    HomePage,
    SigninPage,
    RoomPage,
    AddRoomPage,
    HomempPage,
    Example_1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    MyProfilePage,
    BusDetailsPage,
    BusNo16Page,
    BusTimingNo16Page,
    BusDriverNo16Page,
    StaffDetailsBusNo16Page,
    StudentsDetailsBusNo16Page,
    HelpMePage,
    RouteMapPage,
    LogOutPage,
    LocataSupportPage,
    TermsAndConditionsPage,

    HomePage,
    SigninPage,
    RoomPage,
    AddRoomPage,
    HomempPage,
    Example_1Page
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Example_1Page,
    HomempPage,
    MyProfilePage
  ]
})
export class AppModule {}