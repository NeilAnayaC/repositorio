import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente} from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

/* import {personaService} from "./Service/ServiceService"; */
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Cliente[]= [];
  constructor(private service:ServiceService, private router:Router){}
    ngOnInit() {
      this.service.getPersonas()
      .subscribe(data=>{
        this.personas=data;
        console.log(data);
      })
    }
}


/*clientes: Cliente[] = [];
  constructor(private personaService: ServiceService) { }
  ngOnInit():void{
    this.listarCliente();
  }

  listarCliente(){
    this.personaService.getClientes().subscribite((res) =>{
      this.clientes =res;
      console.log(res);
    })  }

  date:Date= new Date();  
  personas:Persona={name:"",direccion:"",fecha:this.date,telefono:"",correo:""}  */