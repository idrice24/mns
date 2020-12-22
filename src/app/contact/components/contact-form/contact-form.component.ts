import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

// @Idrice: this should be stored somewhere else
const YOUR_TEMPLATE_ID = 'template_G';
const YOUR_SERVICE_ID = 'service_w7qt7l5';
const YOUR_USER_ID = 'user_YIhNVDsUQgt2WqSKn4OkQ';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message: string;
  sendForm: FormGroup;


  constructor(private messageService: MessageService) {

  }

  ngOnInit(): void {
    // @Idrice: We dont need email validation here : Angular build in
    // https://angular.io/api/forms/EmailValidator
    this.sendForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(''),
      msg: new FormControl('', [
        Validators.required,
        Validators.minLength(14),

      ])
    }
    );
  }


  // convenience getter for easy access to form fields
  get name() { return this.sendForm.get('name'); }
  get email() { return this.sendForm.get('email'); }
  get msg() { return this.sendForm.get('msg'); }

  send(data) {
    const sd = JSON.stringify(data, null, 2);
    console.log(sd);
  }

  // Logic to send an email
  public sendEmail(e: Event) {

    console.log(e.target);


    e.preventDefault(); //  For what?

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target as HTMLFormElement, YOUR_USER_ID)
      .then((result: EmailJSResponseStatus) => {
        this.messageService.add({ severity: 'success', summary: 'Service Message' + result.status, detail: result.text });
        this.sendForm.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

}
