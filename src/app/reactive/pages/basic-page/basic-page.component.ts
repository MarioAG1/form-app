import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const byDefault = {
  name: "Ejemplo",
  price: 12,
  inStorage: 12,
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl("",),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // })

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.myForm.reset(byDefault)
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }


    console.log(this.myForm.value)
  }

}
