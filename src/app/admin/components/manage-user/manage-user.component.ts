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
  appUserDetailsDialog: boolean;
  submitted: boolean;
  Delete; // for what?

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userService: UserService) { }

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
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + appUser.lName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appUsers = this.appUsers.filter(val => val.id !== appUser.id);
        this.appUser = { id: 0 };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'App User Deleted', life: 10000 });
      }
    });

  }


  displayAppUser(appUser): void {

    this.appUser = { ...appUser };
    this.appUserDetailsDialog = true;

  }

  hideDialog() {

  }
}
