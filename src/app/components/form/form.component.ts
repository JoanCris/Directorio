import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/model/contacto.model';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  contacto: Contacto = new Contacto();
  formSubmitted: boolean = false;

  constructor(private model: Model) { }

  getValidationMessages(state: any, thingTitle?: string) {
    let thing: string = state.path || thingTitle;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorTitle in state.errors) {
        switch (errorTitle) {
          case "required":
            messages.push(`Debes escribir ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least
              ${state.errors["minlength"].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
      //messages = this.getValidationMessages(form.controls[k], k);
    });
    return messages;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.model.saveContacto(this.contacto);
      this.contacto = new Contacto();
      form.reset();

      this.formSubmitted = false;
    }
  }
}
