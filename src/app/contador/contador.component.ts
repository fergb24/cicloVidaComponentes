import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
  
  @Input() valor = 0;
  @Output() alDestruir = new EventEmitter<void>();

  ngOnInit() {
    console.log('ContadorComponent: ngOnInit - iniciando con valor: ', this.valor);    
  }

  incrementar() {
    this.valor++;
  }

  ngOnDestroy() {
    console.log('ContadorComponent: ngOnDestroy - el componente será destruido');
    this.alDestruir.emit();    
  }
}
