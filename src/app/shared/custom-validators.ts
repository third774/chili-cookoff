import {FormControl, ValidatorFn} from "@angular/forms";

export function mailFormat(control: FormControl) {

  const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if (control.value != "" && ((control.value && control.value.length <= 5) || !emailRegex.test(control.value))) {
    return { "incorrectMailFormat": true };
  }

  return null;
}

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
