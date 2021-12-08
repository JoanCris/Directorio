import { Injectable } from "@angular/core";
import { Contacto } from "./contacto.model";
import { RestDataSource } from "./rest.dataSource";

@Injectable()

export class Model {
  private contactos: Contacto[] = new Array<Contacto>();

  constructor(private dataSource: RestDataSource) {
    dataSource.getData().subscribe(data => this.contactos = data);
  }

  getContactos(): Contacto[] {
    return this.contactos;
  }

  //Selecciona un contacto
  getContacto(id: number): any {
    return this.contactos.find(c => c.id == id);
  }

  saveContacto(contacto: Contacto) {
    //Añadir uno nuevo
    if (contacto.id == 0 || contacto.id == null) {
      this.dataSource
        .saveContacto(contacto)
        .subscribe(c => this.contactos.push(c));
    } else {
    //modificar uno existente
      this.dataSource
        .updateContacto(contacto)
        .subscribe((c: any) => {
          let index = this.contactos.
            findIndex(item => item == c.id);
          this.contactos.splice(index, 1, c);
        });
    }
  }

  deleteContacto(id: number) {
    this.dataSource.deleteContacto(id).subscribe(() => {
      let index = this.contactos.findIndex(c => c.id == id);
      if (index > -1) {
        this.contactos.splice(index, 1);
      }
    })
  }
}