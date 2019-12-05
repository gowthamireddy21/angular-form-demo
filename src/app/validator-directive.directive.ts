import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function ValidatorDirectiveDirective(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: "[appValidatorDirective]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true
    }
  ]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input("appValidatorDirective") forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName
      ? ValidatorDirectiveDirective(new RegExp(this.forbiddenName, "i"))(
          control
        )
      : null;
  }
}
