import { Component } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-ciclo2',
  standalone: true,
  imports: [],
  templateUrl: './ciclo2.component.html',
  styleUrl: './ciclo2.component.css'
})
export class Ciclo2Component {

  constructor(private mensajesService: MensajesService) {}

  ngOnInit() {
    console.log(this.mensajesService.getMensaje());
  }
}
