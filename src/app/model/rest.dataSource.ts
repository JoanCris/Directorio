import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Contacto } from "./contacto.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()

export class RestDataSource {
  constructor(
    private http: HttpClient,
    @Inject(REST_URL)
    private url: string
  ) { }

  getData(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.url);    
  }

  saveContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.url, contacto);
  }

  updateContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(`${this.url}/${contacto.id}`, contacto);
  }

  deleteContacto(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(`${this.url}/${id}`);
  }
}