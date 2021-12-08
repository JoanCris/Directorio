import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto.model';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  arrKeys: Array<any> = [];

  constructor(
    private model: Model
    )
  { }

  getContactos(): Contacto[] {
    return this.model.getContactos();
  }

  getContacto(id: number): Contacto {
    return this.model.getContacto(id);
  }

  getKeys(): Array<any> {
    if (this.getContactos()[0] !== undefined &&  this.arrKeys.length == 0) {
      let obj = this.getContactos()[0];
      this.arrKeys = Object.keys(obj);
      this.arrKeys.shift();
    }

    return this.arrKeys;
  }

  deleteContacto(id: any){
    this.model.deleteContacto(id);
  }
}
