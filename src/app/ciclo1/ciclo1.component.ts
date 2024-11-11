import { Component, OnDestroy, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css'
})
export class Ciclo1Component implements OnInit, OnDestroy {

  nombre: string = '';
  //Vamos a inyectar el servicio de mensajes
  constructor(private mensajeService: MensajesService) {

  }

  ngOnInit(): void {
    this.mensajeService.setMensaje('ngOnInit lanzado en ciclo1');
    console.log(this.mensajeService.getMensaje());
  }

  ngOnDestroy(): void {
    console.log('Has llamado a ngOnDestroy');
  }
}
