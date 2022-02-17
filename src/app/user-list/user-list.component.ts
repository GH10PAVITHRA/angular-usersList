import { Component, OnInit } from '@angular/core';
import { UserFromFile } from '../userfile';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user = UserFromFile;
  constructor() { }

  ngOnInit() {
  }

}