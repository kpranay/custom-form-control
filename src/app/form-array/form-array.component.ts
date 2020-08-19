import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  testForm: FormGroup;
  testData=0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // DefaultValueAccessor
    this.testForm = this.formBuilder.group({
      testLines: this.formBuilder.array([])
    });

    this.testLines.push(this.prepareForm({id: 1, name: 'pranay', score: 1.98910, score2: 123.1222}));
  }
  addData() {
    this.testLines.push(this.prepareForm({id: 1, name: 'pranay', score: 1.8899, score2: 253.1223}));
    this.testLines.updateValueAndValidity();
  }

  update(form: FormGroup) {
    form.get('score2').setValue(92.122);
    form.updateValueAndValidity();
  }

  prepareForm(data) {
    return this.formBuilder.group({
      id: data.id,
      name: data.name,
      score: [data.score, {updateOn: 'blur'}],
      score2: [data.score2, { validators: [Validators.required], updateOn: 'blur' }]
    });
  }

  get testLines() {
    return this.testForm.get('testLines') as FormArray;
  }

  print() {
    console.log('data>>', this.testForm.value);
    console.log('testData>>', this.testData)
  }

}
