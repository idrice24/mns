import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
// REF: https://angular.io/start/start-forms
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginForm: FormGroup;
  appUser: AppUser;
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.appUser = {
      email: '',
      fName: '',
      isAdmin: false,
      lName: '',
      password: '',
      id: 0

    };
    this.setMessage();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      fName: new FormControl(this.appUser.fName, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i)
      ]),
      password: new FormControl(this.appUser.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    }
    );
  }
  // convenience getter for easy access to form fields
  get fName() { return this.loginForm.get('fName'); }
  get password() { return this.loginForm.get('password'); }



  login(userData) {
    console.warn('Your order has been submitted', userData);


    // TODO@Idrice logs this messae better way
    this.message = 'Trying to log in ...';
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }


    this.authService.login(this.fName.value, this.password.value).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
