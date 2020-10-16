import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    // Execute Validation!! Cool
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenEmail: { value: control.value } } : null;
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

    // Nice.. see how to  define RegExp object in angular
    const regExp = new RegExp(this.forbittenEmail, 'i');
    const response = this.forbittenEmail ? forbiddenEmailValidator(regExp)(control) : null;
    return response;
  }


}
