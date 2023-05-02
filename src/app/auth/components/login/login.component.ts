import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { MissionService } from 'src/app/shared/services/mission.service';
import { Title } from '@angular/platform-browser';
// REF: https://angular.io/start/start-forms
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: ' ';
  loginForm: FormGroup;
  appUser: AppUser;
  constructor(
    private formBuilder: FormBuilder,
    private missionService: MissionService, // To  Act subscription
    public authService: AuthService, 
    public router: Router,
    private titleService: Title // Inject to set document title on  browser
    ) {
    this.appUser = {
      email: '',
      fName: '',
      isAdmin: false,
      lName: '',
      password: '',
      id: 0

    };

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.appUser.email, [
        Validators.required,
      ]),
      password: new FormControl(this.appUser.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    }
    );
    this.titleService.setTitle('MNS237 - Login'); // Adding the title Home to the MNS237  main Title
  }
  // convenience getter for easy access to form fields
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }



  login(userData) {


    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return ;
    }


    this.authService.checkLogin(this.email.value, this.password.value).subscribe(isLoggedIn => {

      if (isLoggedIn) {
        console.log('LoggIn Successfully');
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/admin';


        // Send to subscriber i.e. header.component.ts
        this.missionService.confirmLogging(this.email.value);

        // Set our navigation extras object
        // TODO@Idrice I dont  understand this !!
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Clear input data in form
        this.loginForm.reset();

        // Navigation to admin page!!
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
  }


}
