import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Example_1Page } from '../example-1/example-1';
import { Profile } from '../../app/models/profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase,
              public navCtrl: NavController,
               public navParams: NavParams) {
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
.then(() => this.navCtrl.setRoot(Example_1Page))
    } )
  }

}
