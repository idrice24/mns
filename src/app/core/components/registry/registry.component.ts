import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/shared/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  constructor() { }
  constructor() { }  registryForm;
  appUser: AppUser;
  users: AppUser[];
  message: string;
  numberOfUsers: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public dialogService: DialogService) {

    this.registryForm = this.formBuilder.group({
      fName: new FormControl(this.fName, [Validators.required, Validators.minLength(4)]),
      lName: '',
      email: '',
      password: ''
    });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public dialogService: DialogService) {

    this.registryForm = this.formBuilder.group({
      fName: '',
      lName: '',
      email: '',
      password: ''
    });

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { appUser: AppUser }) => {
        this.appUser = data.appUser;
      });

    this.getNumberOfUsers();
    this.getUsers();
  }

  onSubmit(userAppData) {
    if (!userAppData) {
      return;
    }
    this.userService.addUser(userAppData).subscribe();
    // Ref: https://angular.io/start/start-forms
    this.registryForm.reset();
    this.message = 'Your user has been submitted';
    console.warn(this.message, userAppData);
    // Just wait 2 s
    this.delay(2000);

  }

  gotoHome() {
    const appUserId = this.appUser ? this.appUser.id : null;
    // Pass along the user id if available
    // so that the Home can select that user.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    // this.router.navigate(['./', { id: appUserId, foo: 'foo' }], { relativeTo: this.route });
    this.router.navigate(['/home']);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  delete(appUser: AppUser): void {
    this.users = this.users.filter(user => user !== appUser);
    this.userService.deleteUser(appUser).subscribe();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => this.getNumberOfUsers());
  }

  getNumberOfUsers() {
    return this.userService.getUsers().subscribe(i => this.numberOfUsers = i.length);
  }
  get fName() { return this.registryForm.get('fName'); }
  ngOnInit() {
    this.route.data
      .subscribe((data: { appUser: AppUser }) => {
        this.appUser = data.appUser;
      });

    this.getNumberOfUsers();
    this.getUsers();
  }

  onSubmit(userAppData) {
    if (!userAppData) {
      return;
    }
    this.userService.addUser(userAppData).subscribe();
    // Ref: https://angular.io/start/start-forms
    this.registryForm.reset();
    this.message = 'Your user has been submitted';
    console.warn(this.message, userAppData);
    // Just wait 2 s
    this.delay(2000);

  }

  gotoHome() {
    const appUserId = this.appUser ? this.appUser.id : null;
    // Pass along the user id if available
    // so that the Home can select that user.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    // this.router.navigate(['./', { id: appUserId, foo: 'foo' }], { relativeTo: this.route });
    this.router.navigate(['/home']);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  delete(appUser: AppUser): void {
    this.users = this.users.filter(user => user !== appUser);
    this.userService.deleteUser(appUser).subscribe();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => this.getNumberOfUsers());
  }

  getNumberOfUsers() {
    return this.userService.getUsers().subscribe(i => this.numberOfUsers = i.length);
  }
}
