import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserInfo } from 'src/models/UserInfo-model';

@Component({
  selector: 'app-entertainer-component',
  templateUrl: './entertainer-component.component.html',
  styleUrls: ['./entertainer-component.component.css']
})
export class EntertainerComponentComponent {

  personForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bio: [''],
      birthdate: [''],
      nationality: [''],
      image: ['']
    });
  }


  onSubmit()
  {

  }


}
