import {FormControl, ValidatorFn} from "@angular/forms";

export function MinNumber(num: number) : ValidatorFn {
  function MinNumber(c: FormControl) {
    if (c.value < num) {
      return {
        minNumberError: {
          valid: false
        }
      };
    }
  }

  return MinNumber;
}

export function MaxNumber(num: number) : ValidatorFn {
  function MaxNumber(c: FormControl) {
    if (c.value > num) {
      return {
        maxNumberError: {
          valid: false
        }
      };
    }
  }

  return MaxNumber;
}
