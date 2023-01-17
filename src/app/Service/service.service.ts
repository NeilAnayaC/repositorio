import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


   Url = 'http://localhost:3000/clients/' 
 /*  Url = 'localhost:3000/Frontcliente/personas' */

  getPersonas(){
    return this.http.get<Cliente[]>(this.Url);
  }



}
