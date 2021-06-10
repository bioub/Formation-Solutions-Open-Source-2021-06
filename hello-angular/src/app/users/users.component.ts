import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  // private userService: UserService;

  // constructor(userService: UserService) {
  //   this.userService = userService
  //  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

}
