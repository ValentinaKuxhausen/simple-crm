import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {

  userId = '';

  // class User, type object
  user: User = new User();

  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    public dialog: MatDialog) { }

  /**
   * This function gets route id from URL. See "path: 'user/:id'" in app-routing.module.ts.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id')!;
      console.log('got id', this.userId);
      this.getUser(); 
    })
  }

  /**
   * This function gets collection from firebase. 
   * Getting one element from collection 'users' with variable "userId" via .doc..
   * Subscribing changes, if there are any and assign to vriable "user".
   */
  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.user = new User(user);
      console.log('user logged', this.user);
    })
  }

  /**
   * This function accesses with "this.user" to DialogEditUserComponent.
   */
  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
  }

  /**
   * This function 
   */
  editUserAddress() {
    this.dialog.open(DialogEditAddressComponent)
  }




}
