import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from './user';

@Injectable()
export class AuthService {

  user$: Observable<User>;
  metadata;
  
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.user$ = afAuth.authState.switchMap(user => {
      if(user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
   }

   loginWithGooglge(){
     const provider = new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider).then((data) => {
       this.metadata = data;
       //console.log("credential: ",credential);
       //console.log("user: ", credential.user);
      this.updateUser(data);
    });
   }

   updateUser(data) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${data.user.uid}`);
    const user: User = {
      uid: data.user.uid,
      token: data.credential.idToken,
      email: data.user.email,
      displayName: data.user.displayName,
      photoURL: data.user.photoURL,

    }
    console.log("data: ", user);
    return userRef.set(user, {merge: true});
  }

   logout(){
     this.afAuth.auth.signOut();
   }
}
