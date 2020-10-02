import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/shared/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  registryForm;
  appUser: AppUser;
  editName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
  }

  onSubmit(userAppData) {
    this.gotoHome();
    console.warn('Your user has been submitted', userAppData);
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

}
