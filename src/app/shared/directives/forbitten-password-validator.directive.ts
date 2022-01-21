import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
// REF: https://angular.io/guide/form-validation#defining-custom-validators

export function forbittenPasswordValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    // valid password pattern
    const passwordPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const regExp = new RegExp(passwordPattern);
    // Execute Validation!! Cool
    const isOkay = regExp.test(control.value);
    console.log(' ISOkay = ' + isOkay);
    return !isOkay ? { forbiddenPassword: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbittenPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbittenPasswordValidatorDirective, multi: true }]
})
export class ForbittenPasswordValidatorDirective implements Validator {

  // Defintion of Storage HTML property named appForbiddenPassword in forbiddenPassword
  @Input('appForbittenPassword') forbittenPassword!: string;

  constructor() { }

  // Return typ ?
  // Control ie. input element
  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log('Directive--> ' + control.errors);
    // Nice.. see how to  define RegExp object in angular

    // Execute validation logic --> ValidationErrors
    const response = this.forbittenPassword ? forbittenPasswordValidator()(control) : null;
    // const l = JSON.stringify(response);
    // console.log(' Response= ' + l + ' ' + response.forbiddenPassword);
    return response;
  }


}
