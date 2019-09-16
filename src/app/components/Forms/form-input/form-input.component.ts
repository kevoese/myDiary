import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() name:string;
  @Input() title:string;
  @Input() placeholder:string;
  @Input() type:string;
  @Input() inputType:string;
  showPassword:boolean = false;

  constructor() {
   }

  ngOnInit() {
    if (this.inputType)
     {
       this.type = this.showPassword ? 'text' : 'password';
     }
  }

  setClasses() {
    let classes = {
      'form-password': this.inputType ? true : false,
    }
    return classes;
  }

  toggle() {
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'text' : 'password';
  }
}
