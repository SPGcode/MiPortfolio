import { Component, OnInit } from '@angular/core';
import { DataSendService } from '../../services/data-send.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fecha: Date = new Date();

  createFormGroup(){
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  contactForm: FormGroup;

  constructor(private dbData: DataSendService) { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm() {
    if(this.contactForm.valid){
      console.log(this.dbData);
      this.dbData.addMessage(this.contactForm.value);
      this.onResetForm();
    }else{
      console.log('not valid min 10 letters length')
    }

  }

  get name(){ return this.contactForm.get('name'); }
  get email(){ return this.contactForm.get('email'); }
  get message(){return this.contactForm.get('message'); }
  get date(){
    return this.contactForm.get('date'); 
  }

}