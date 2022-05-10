import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators, ValidationErrors } from "@angular/forms";
import { CustomValidators } from "./date-validators";

const currentDate = new Date().toISOString().slice(0, 10);

const blankParticipant = {
  name: '',
  email: '',
  dateOfBirth: currentDate,
}

const teamNameValidators = [
  Validators.required,
  Validators.maxLength(20),
];

const teamShortcutValidators = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(3),
];

const nameValidators = [
  Validators.required,
];

const emailValidators = [
  Validators.email,
  Validators.required,
];

const dateValidators = [
  CustomValidators.dateBetween('01-01-1900', currentDate)
]

@Component({
  template: `
    <div class="form-cover">
      <div class="form-container">
        <form [formGroup]="formGroup" (submit)="this.submitForm()">
          <div class="field-container">
            <label for="teamName">Team name</label>
            <input id="teamName" type="text" formControlName="teamName" />
            <div
              *ngIf="
              formGroup.controls['teamName'].invalid && 
              (formGroup.controls['teamName'].dirty || formGroup.controls['teamName'].touched)" 
              class="error-message">
              {{getTeamNameValidationMessage(formGroup.controls['teamName'].errors)}}
            </div>
          </div>

          <div class="field-container">
            <label for="teamShortcut">Team shortcut</label>
            <input id="teamShortcut" type="text" formControlName="teamShortcut" />
            <div
              *ngIf="
              formGroup.controls['teamShortcut'].invalid && 
              (formGroup.controls['teamShortcut'].dirty || formGroup.controls['teamShortcut'].touched)" 
              class="error-message">
              {{getTeamShortcutValidationMessage(formGroup.controls['teamShortcut'].errors)}}
            </div>
          </div>

          <div 
            formArrayName="participants" 
            class="participants-holder"
          >
            <header>
              <div>
                Participants
              </div>
              <button
                type="button"
                class="primary"
                (click)="this.addNewParticipant()"
              >
                Add participant
              </button>
            </header>
            <div
              class="participant-container"
              *ngFor="let participantControl of this.participantControls; index as i"
              [formGroupName]="i"
            >
              <div class="field-container">
                <label for="name">Name</label>
                <input id="name" type="text" formControlName="name" />
                <div
                  *ngIf="
                  participantControl.controls['name'].invalid && 
                  (participantControl.controls['name'].dirty || participantControl.controls['name'].touched)" 
                  class="error-message">
                  {{getNameValidationMessage(participantControl.controls['name'].errors)}}
                </div>
              </div>
              
              <div class="field-container">
                <label for="email">E-mail</label>
                <input id="email" type="text" formControlName="email" />
                <div
                  *ngIf="
                  participantControl.controls['email'].invalid && 
                  (participantControl.controls['email'].dirty || participantControl.controls['email'].touched)" 
                  class="error-message">
                  {{getEmailValidationMessage(participantControl.controls['email'].errors)}}
                </div>
              </div>

              <div class="field-container">
                <label for="dateOfBirth">Date of birth</label>
                <input id="dateOfBirth" type="date" formControlName="dateOfBirth" />
                <div
                  *ngIf="
                  participantControl.controls['dateOfBirth'].invalid && 
                  (participantControl.controls['dateOfBirth'].dirty || participantControl.controls['dateOfBirth'].touched)" 
                  class="error-message">
                  {{getDateValidationMessage(participantControl.controls['dateOfBirth'].errors)}}
                </div>
              </div>

              <div>
                <button 
                  type="button" 
                  (click)="this.removeParticipant(i)"
                  class="secondary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div class="button-container">
            <button type="submit" class="primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./apply-form.component.scss'],
  selector: 'app-apply-form'
})
export class ApplyForm extends Component {
  formGroup = new FormGroup({
    teamName: new FormControl('', teamNameValidators),
    teamShortcut: new FormControl('', teamShortcutValidators),
    participants: new FormArray([
      new FormGroup({
        name: new FormControl(blankParticipant.name, nameValidators),
        email: new FormControl(blankParticipant.email, emailValidators),
        dateOfBirth: new FormControl(blankParticipant.dateOfBirth, dateValidators),
      })
    ])
  });

  submitForm() {
    console.log(this.participants.controls.forEach((control) => console.log(control.errors)));
  }

  addNewParticipant() {
    const participantControls = new FormGroup({
      name: new FormControl(blankParticipant.name),
      email: new FormControl(blankParticipant.email),
      dateOfBirth: new FormControl(blankParticipant.dateOfBirth),
    });

    this.participants.push(participantControls);
  }

  get participants() {
    return this.formGroup.controls["participants"] as FormArray;
  }

  get participantControls() {
    return this.participants.controls as FormGroup[];
  }

  removeParticipant(i: number) {
    this.participants.removeAt(i);
  }

  getTeamNameValidationMessage = (errors: ValidationErrors | null): string | undefined => {
    if (!errors) return;
    if (errors['required']) return 'Required';
    if (errors['maxlength']) return `Must be ${errors['maxlength'].requiredLength} letters or less`;
    return;
  }

  getTeamShortcutValidationMessage = (errors: ValidationErrors | null): string | undefined => {
    if (!errors) return;
    if (errors['required']) return 'Required';
    if (errors['maxlength'] || errors['minlength']) return 'Must contain 2 or 3 letters/digits';
    return;
  }

  getNameValidationMessage = (errors: ValidationErrors | null): string | undefined => {
    if (!errors) return;
    if (errors['required']) return 'Required';
    return;
  }

  getEmailValidationMessage = (errors: ValidationErrors | null): string | undefined => {
    if (!errors) return;
    if (errors['required']) return 'Required';
    if (errors['email']) return 'Field should contain valid e-mail address';
    return;
  }

  getDateValidationMessage = (errors: ValidationErrors | null): string | undefined => {
    if (!errors) return;
    if (errors['minDate']) return `Date cannot be earlier than January 1st, 1900`;
    if (errors['maxDate']) return `Date cannot come from the future`;
    return
  }
}