import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';

import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { ModelModule } from './model/model.module';
import { Model } from './model/repository.model';
import { RestDataSource, REST_URL } from './model/rest.dataSource';
import { FormatPhonePipe } from './pipes/formatPhone.pipe';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    FormatPhonePipe
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Model,
    RestDataSource,
    {
      provide: REST_URL,
      useValue: 'http://localhost:3500/contactos'
    }
  ],
  bootstrap: [
    TableComponent,
    FormComponent
  ],
})
export class AppModule { }
