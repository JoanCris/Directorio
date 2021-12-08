import { NgModule } from '@angular/core';
import { Model } from './repository.model';
import { RestDataSource, REST_URL } from './rest.dataSource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    Model,
    RestDataSource,
    {
      provide: REST_URL,
      useValue: 'http://localhost:3500/contactos'
    }
  ]
})

export class ModelModule { }
