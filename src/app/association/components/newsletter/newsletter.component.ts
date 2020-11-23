import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSubscriberService } from 'src/app/shared/services/app-subscriber.service';
import { AppSubscriber } from 'src/app/shared/models/app-subscriber';



@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;
  display = false;

  showDialog() {
    this.display = true;
  }

  // convenience getter for easy access to form fields
  get fName() { return this.newsletterForm.get('fName'); }
  get lName() { return this.newsletterForm.get('lName'); }
  get email() { return this.newsletterForm.get('email'); }


  constructor(private appSubscriberService: AppSubscriberService) { }

  ngOnInit(): void {
    this.newsletterForm = new FormGroup({

      // fname
      fName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      // lName
      lName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      // email
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),


    });
  }


  // Save to data base this user information
  doSubscription() {

    const currentAppSubsriber: AppSubscriber = {
      fName: this.fName.value,
      lName: this.lName.value,
      email: this.email.value,
      verified: false
    };

    this.appSubscriberService.addAppSubscriber(currentAppSubsriber).subscribe(_ =>
      // To Clean a formular
      this.newsletterForm.reset());

  }
}
