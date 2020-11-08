import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;
  display: boolean = false;

  showDialog(){
      this.display = true;
}

// convenience getter for easy access to form fields
  get fName() { return this.newsletterForm.get('fName'); }
  get email() { return this.newsletterForm.get('email'); }
  get lName() { return this.newsletterForm.get('lName'); }

  constructor() { }

  ngOnInit(): void {
  this.newsletterForm = new FormGroup({

        // fname
        fName: new FormControl( '', [
          Validators.required,
          Validators.minLength(8),
        ]),

        // email
        email: new FormControl( '', [
          Validators.required,
          Validators.minLength(4),
        ]),

        // lName
        lName: new FormControl( '', [
          Validators.required,
          Validators.minLength(8),
        ]),
  });
}


  newsletter() {
    }
}
