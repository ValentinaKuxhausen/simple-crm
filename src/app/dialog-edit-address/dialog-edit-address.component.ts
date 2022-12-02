import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.sass']
})
export class DialogEditAddressComponent implements OnInit {

  user!: User;
  loading = false;
  userId!: string;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  /**
   * This function updates - the edited user - in firebase.
   */
  saveUser() {
    this.loading = true;

    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then((result: any) => {
      this.loading = false;
      this.dialogRef.close();
    })
  }




}
