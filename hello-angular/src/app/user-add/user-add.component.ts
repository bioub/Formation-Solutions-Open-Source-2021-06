import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user: User = {
    name: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  add() {
    this.userService.addEvent.emit({...this.user});
  }
}
