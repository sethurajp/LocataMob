import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject, } from "angularfire2/database";
import { Profile } from '../../app/models/profile';


@IonicPage()
@Component({
  selector: 'page-homemp',
  templateUrl: 'homemp.html',
  providers: [AngularFireDatabase]
})
export class HomempPage {

    profileData: AngularFireObject<Profile>
    userData: any; //Profile;

  constructor(
      private afAuth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private toast: ToastController) {
          this.userData = this.navParams.data;
        //   console.log("User Data: " + JSON.stringify(this.userData));
          
  }

  ionViewWillLoad(){
      this.afAuth.authState.subscribe(data => {
          console.log("Auth Success: " + JSON.stringify(data));
          
          if(data.email && data.uid) {  
              this.toast.create({
                  message: `Welcome to Locata, ${data.email}`,
                  duration: 3000
                }).present();

                this.profileData = this.afDatabase.object(`profile/${data.uid}`);
                // this.profileData = this.afDatabase.list<any>(`${this.afAuth.user}`).valueChanges().subscribe(console.log);
            
            } else {
                this.toast.create({
                    message: `Could not find authentication details.`,
                    duration: 3000
                }).present();
            }
        });
  }

    signOut(){
        this.afAuth.auth.signOut().then(res => {
            this.navCtrl.setRoot("LoginPage"); // or somewhere else
        });
    }

}