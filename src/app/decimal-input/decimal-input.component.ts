import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { KeyBoardEvents } from '../shared/defaults/KeyBoardEvents';

export const DECIMAL_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DecimalInputComponent),
  multi: true,
};


@Component({
  selector: 'app-decimal-input',
  templateUrl: './decimal-input.component.html',
  styleUrls: ['./decimal-input.component.scss'],
  providers: [DECIMAL_VALUE_ACCESSOR]
})
export class DecimalInputComponent implements OnInit, ControlValueAccessor {

  decimalForm: FormGroup;

  onValueChange;
  onValueTouch;

  @Input() name;

  constructor(
    private fb: FormBuilder
  ) {
    this.decimalForm = this.fb.group({
      actualValue: [],
      valueOnDom: [null, {updateOn: 'blur'}]
    });
    this.decimalForm.get('valueOnDom')
      .valueChanges.subscribe((value) => {
        // TODO: validate data before calling value change event
        this.decimalForm.patchValue({
          actualValue: value,
          valueOnDom: value ? parseFloat(value).toFixed(2) : value
        }, {
          emitEvent: false
        });
        if (this.onValueChange) {
          this.onValueChange(value);
        }
      });
  }

  inputTouch() {
    this.onValueTouch();
  }

  writeValue(obj: any): void {
    this.decimalForm.patchValue({
      actualValue: obj,
      valueOnDom: obj ? parseFloat(obj).toFixed(2) : obj
    }, {
      emitEvent: false
    });
  }
  registerOnChange(fn: any): void {
    this.onValueChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onValueTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // TODO
  }

  ngOnInit(): void {
  }

  isAValidNegativeDecimalNumber(event) {
    if (([KeyBoardEvents.NUMZERO, KeyBoardEvents.NUMONE, KeyBoardEvents.NUMTWO, KeyBoardEvents.NUMTHREE,
         KeyBoardEvents.NUMFOUR, KeyBoardEvents.NUMFIVE, KeyBoardEvents.NUMSIX, KeyBoardEvents.NUMSEVEN,
         KeyBoardEvents.NUMEIGHT, KeyBoardEvents.NUMNINE, KeyBoardEvents.ARROWDOWN_1, KeyBoardEvents.ARROWDOWN_2,
         KeyBoardEvents.ARROWLEFT_1, KeyBoardEvents.ARROWLEFT_2, KeyBoardEvents.ARROWRIGHT_1, KeyBoardEvents.ARROWRIGHT_2,
         KeyBoardEvents.ARROWUP_1, KeyBoardEvents.ARROWUP_2, KeyBoardEvents.BACKSPACE, KeyBoardEvents.TAB, KeyBoardEvents.DOT_1,
         KeyBoardEvents.DOT_2, KeyBoardEvents.DELETE_1, KeyBoardEvents.DELETE_2, KeyBoardEvents.MINUS_1,
         KeyBoardEvents.MINUS_2].includes(event.key))
         && (!event.shiftKey || (event.shiftKey && event.key === KeyBoardEvents.TAB) /*shift tab*/)
      || (event.ctrlKey && ([KeyBoardEvents.ALPHABET_A, KeyBoardEvents.ALPHABET_CAPITAL_A].includes(event.key))) /*select all*/) {
      return true;
    }
    return false;
  }

}
