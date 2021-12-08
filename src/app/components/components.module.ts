import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatPhonePipe } from '../pipes/formatPhone.pipe';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    FormatPhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    FormComponent
  ]
})

export class ComponentsModule { }
