import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static dateBetween(minDate: string, maxDate: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null) {
        return null;
      }

      const minDateObj = new Date(minDate);
      const inputDate = new Date(control.value);
      const maxDateObj = new Date(maxDate);

      if (inputDate > maxDateObj) {
        return { maxDate }
      }

      if (inputDate < minDateObj) {
        return { minDate }
      }

      return null;
    };
  }
}