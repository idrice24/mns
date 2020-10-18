import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


export function forbittenEmailValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {


    // valid email pattern
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const regExp = new RegExp(emailPattern);
    // Execute Validation!! Cool
    const isOkay = regExp.test(control.value);
    console.log(' ISOkay = ' + isOkay);
    return !isOkay ? { forbiddenEmail: { value: control.value } } : null;
  };
}


// REF: https://angular.io/guide/form-validation#defining-custom-validators
// TODO@Idrice
// 1. Defining custom validators i.e Email.


@Directive({
  selector: '[appForbittenEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbittenEmailValidatorDirective, multi: true }]
})
export class ForbittenEmailValidatorDirective implements Validator {

  // Defintion of Storage HTML property named appForbiddenEmail in forbiddenEmail
  @Input('appForbittenEmail') forbittenEmail: string;

  constructor() { }

  // Return typ ?
  // Control ie. input element
  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log('Directive--> ' + control.errors);
    // Nice.. see how to  define RegExp object in angular

    // Execute validation logic --> ValidationErrors
    const response = this.forbittenEmail ? forbittenEmailValidator()(control) : null;
    // const l = JSON.stringify(response);
    // console.log(' Response= ' + l + ' ' + response.forbiddenEmail);
    return response;
  }


}
