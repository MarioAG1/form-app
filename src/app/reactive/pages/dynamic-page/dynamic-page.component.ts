import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {


  constructor(private fb: FormBuilder) {

  }

  get favoriteGames() {
    return this.myForm.get("favoriteGames") as FormArray
  }

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ["Metal Gear", Validators.required],
      ["Death Stranding", Validators.required],
    ])

  })

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
    this.myForm.reset()
  }

}
