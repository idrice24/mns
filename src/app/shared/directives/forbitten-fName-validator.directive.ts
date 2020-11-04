import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


export function forbittenFnameValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {


    // valid fName pattern
    const emailPattern = '^[a-z0-9._%+-]';
    const regExp = new RegExp(emailPattern);
    // Execute Validation!! Cool
    const isOkay = regExp.test(control.value);
    console.log(' ISOkay = ' + isOkay);
    return !isOkay ? { forbiddenFname: { value: control.value } } : null;
  };
}


// REF: https://angular.io/guide/form-validation#defining-custom-validators


@Directive({
  selector: '[appForbittenFname]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbittenFnameValidatorDirective, multi: true }]
})
export class ForbittenFnameValidatorDirective implements Validator {

  // Defintion of Storage HTML property named appForbiddenFname in forbiddenFname
  @Input('appForbittenFname') forbittenFname: string;

  constructor() { }

  // Return typ ?
  // Control ie. input element
  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log('Directive--> ' + control.errors);
    // Nice.. see how to  define RegExp object in angular

    // Execute validation logic --> ValidationErrors
    const response = this.forbittenFname ? forbittenFnameValidator()(control) : null;
    // const l = JSON.stringify(response);
    // console.log(' Response= ' + l + ' ' + response.forbiddenFname);
    return response;
  }


}
