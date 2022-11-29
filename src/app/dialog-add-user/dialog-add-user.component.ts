import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.sass']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;
  loading = false;
    
  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  /**
   * This function adds data to firebase.
   */
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is: ', this.user);
    this.loading = true;

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('adding user finished ', result);
      this.loading = false;
    });
  }




}
