import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];
  
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  /**
   * This function subscribes the firestore data.
   */
  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      this.allUsers = changes;
    })

  }

  /**
   * This function opens dialog in dialog-add-user.component.
   */
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  




}
