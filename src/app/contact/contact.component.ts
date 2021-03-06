import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { ContactRequest, PersonalData } from 'src/model/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  countries = ['USA', 'Germany', 'Italy', 'France']

  requestTypes = ['Claim', 'Feedback', 'Help Request']

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
  }
  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return this.formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: ''
      }),
      requestType: '',
      text: ''
    });
  }
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    });
  }
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }
  ngOnInit(): void {
  }
}


