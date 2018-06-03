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
     this.afAuth.auth.signInWithPopup(provider).then((credential) => {
       console.log("credential: ",credential);
       console.log("user: ", credential.user);
      this.updateUser(credential);
    });
   }

   updateUser(credential) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${credential.user.uid}`);
    const data: User = {
      uid: credential.user.uid,
      token: credential.credential.idToken,
      email: credential.user.email,
      displayName: credential.user.displayName,
      photoURL: credential.user.photoURL,

    }
    console.log("data: ", data);
    return userRef.set(data, {merge: true});
  }

   logout(){
     this.afAuth.auth.signOut();
   }
}
