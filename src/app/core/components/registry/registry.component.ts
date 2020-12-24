import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/shared/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { forbittenEmailValidator } from 'src/app/shared/directives/forbitten-email-validator.directive';
import { forbittenFnameValidator } from 'src/app/shared/directives/forbitten-fName-validator.directive';
import { forbittenPasswordValidator } from 'src/app/shared/directives/forbitten-password-validator.directive';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  registryForm: FormGroup;

  appUser: AppUser;
  users: AppUser[];
  message: string;
  numberOfUsers: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public dialogService: DialogService,
    private titleService: Title // Inject to set document title on  browser
    ) {

    this.appUser = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      isAdmin: false,
      id: 0,
    };
  }
  ngOnInit() {

    this.registryForm = new FormGroup({

      email: new FormControl(this.appUser.email, [
        Validators.required,
        Validators.minLength(4),
        forbittenEmailValidator()
      ]),

      // For fName
      fName: new FormControl(this.appUser.fName, [
        Validators.required,
        Validators.minLength(4),
        forbittenFnameValidator()
      ]),

      // For lName
      lName: new FormControl(this.appUser.lName, [
        Validators.required,
        Validators.minLength(4)
      ]),

      // For password
      password: new FormControl(this.appUser.password, [
        Validators.required,
        Validators.minLength(4),
        forbittenPasswordValidator()
      ]),

      // For pas2
      password2: new FormControl(this.appUser.password, [
        Validators.required,
        Validators.minLength(4)
      ]),
    });

    this.route.data
      .subscribe((data: { appUser: AppUser }) => {
        this.appUser = data.appUser;
      });

    this.getNumberOfUsers();
    this.titleService.setTitle('MNS237 - Cree Un conte'); // Adding the title Home to the MNS237  main Title

  }

  onSubmit(userAppData) {
    if (!userAppData) {
      return;
    }

    this.userService.addUser(userAppData).subscribe();
    // Ref: https://angular.io/start/start-forms
    this.registryForm.reset();

    this.message = 'Votre utilisateur a ete soumis';

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




  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => {
      this.getNumberOfUsers();
      this.message = ' ';
    }
    );
  }

  getNumberOfUsers() {
    return this.userService.getUsers().subscribe(i => this.numberOfUsers = i.length);
  }

  get email() { return this.registryForm.get('email'); }
  get fName() { return this.registryForm.get('fName'); }
}

