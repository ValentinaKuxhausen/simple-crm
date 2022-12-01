import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.sass']
})
export class DialogEditUserComponent implements OnInit {

  user!: User;
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {
    
  }

}
