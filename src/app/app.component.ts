import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  regForm=new FormGroup({
    fname:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    gender:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    age:new FormControl('')
  })

  regUser(){
    console.log(this.regForm.value)
  }

  get fname(){
    return this.regForm.get('fname');
  }

  get gender(){
    return this.regForm.get('gender');
  }

  get country(){
    return this.regForm.get('country');
  }

  get city(){
    return this.regForm.get('city');
  }

  get age(){
    return this.regForm.get('age');
  }
}
