import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { TableModule, Table } from 'primeng/table';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
  styles: [`    :host ::ng-deep .p-dialog .user-image{
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
    }
  `],
  providers : [MessageService, ConfirmationService]
})
export class ManageUserComponent implements OnInit {

  users: AppUser[];
  userDialog: boolean;
  user: AppUser;
  selectedUsers: AppUser[];
  submitted: boolean;
  cols: any[];
  @ViewChild('dv') table: Table;
  // loading: boolean = true;

  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getUsers();
    this.cols = [
      { filed: '', header: 'Avatar'},
      { field: 'fName', header: 'First Name' },
      { field: 'lName', header: 'Last Name' },
      { field: 'email', header: 'email' }
      ];
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
      // this.loading = false;
  }

  openNew(){
    this.user = {...this.user};
    this.submitted = false;
    this.userDialog = true;
  }

  select(user) {
    this.selectedUsers = user;
  }

  deleteSelectedUsers(){
    this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected users?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
    this.users = this.users.filter(val => !this.selectedUsers.includes(val));
    this.selectedUsers = null;
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Users Deleted!', life: 3000});
    }
    });
  }

  editUser(user: AppUser){
    this.user = {...user };
    this.userDialog = true;
  }

  deleteUser(user: AppUser){
    this.confirmationService.confirm({
      message: 'Are you want to delete' + user.fName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
  accept: () => {
    this.users = this.users.filter(val => val.id !== user.id);
    this.user = {...this.user};
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
  }
  });
  }

    hideDialog(){
      this.userDialog = false;
      this.submitted = false;
  }

  saveUser(){
    this.submitted = true;
    if ( this.user.fName.trim()){
    if (this.user.id) {

      this.users[this.findIndexById(this.user.id)] = this.user;
  }
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
  }else{
    // tslint:disable-next-line: radix
    this.user.id = parseInt(this.createId());
    this.user.avatar = 'user-placeholder.svg';
    this.users.push(this.user);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
  }
    this.users = [...this.users];
    this.userDialog = false;
    this.user = {...this.user};
  }

  findIndexById(id: number): number {
     let index = -1;
     for (let i = 0; i < this.users.length; i++){
     if (this.users[i].id === id){
     index = i;
     break;
     }
     }
     return index;
     }

  createId(): string {
     let id = '';
     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for ( let i = 0; i < 5; i++){
     id += chars.charAt(Math.floor(Math.random() * chars.length));
     }
     return id;
     }

    }
