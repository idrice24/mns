import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageUserComponent implements OnInit {

  appUsers: AppUser[];
  appUser: AppUser;
  selectedAppUsers;
  appUserDialog;
  submitted: boolean;
  Delete; // for what?

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.appUser = { id: 0, description: 'kok' };
    this.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.appUsers = users;

      });
  }

  openNew() {
    this.appUser = { id: 0 };

  }

  deleteSelectedAppUsers() {

  }

  saveAppUser() {
    // REF: https://www.primefaces.org/primeng/showcase/#/table/crud

  }

  deleteAppUser(appUser) {

  }

  editAppUser(appUser) {

  }

  hideDialog() {

  }
}
