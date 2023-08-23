import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ["M", [Validators.required]],
    wantNotifications: [true, [Validators.required]],
    termsAndConditions: [true, [Validators.requiredTrue]]
  })

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  public person = {
    gender: "F",
    wantNotifications: false
  }

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnInit() {
    this.myForm.reset(this.person)
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    //Para que no se añada el terms y condiciones a la persona
    const { termsAndConditions, ...newPerson } = this.myForm.value
    this.person = newPerson
    console.log(this.myForm.value)
    console.log(this.person)



  }

}
