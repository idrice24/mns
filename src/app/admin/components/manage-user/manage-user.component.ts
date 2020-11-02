import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  users: AppUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
