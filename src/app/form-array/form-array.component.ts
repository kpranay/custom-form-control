import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      pricingLines: this.formBuilder.array([])
    });

    this.pricingLines.push(this.prepareForm({id: 1, name: 'pranay', score: 1.98910}));
  }

  prepareForm(data) {
    return this.formBuilder.group({
      id: data.id,
      name: data.name,
      score: [data.score, {updateOn: 'blur'}]
    });
  }

  get pricingLines() {
    return this.testForm.get('pricingLines') as FormArray;
  }

}
