import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css'
})
export class Ciclo1Component implements OnChanges, OnInit, AfterContentInit, OnDestroy {

  @Input() nombre: string = '';
  
  constructor() {
    console.log('Constructor lanzado!');
  }

  ngOnChanges() {
    console.log('ngOnChanged ha sido lanzado!');
  }

  ngOnInit(): void {
    console.log('Soy ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('Soy ngAfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('Has llamado a ngOnDestroy');
  }
}
