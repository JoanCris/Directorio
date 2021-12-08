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

  ],
  imports: [
    ComponentsModule,
    ModelModule
  ],
  providers: [

  ],
  bootstrap: [
    TableComponent,
    FormComponent
  ],
})

export class AppModule { }
