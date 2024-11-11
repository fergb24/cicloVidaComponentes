import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css'
})
export class Ciclo1Component implements OnInit, OnDestroy {

  nombre: string = '';

  ngOnInit(): void {
    console.log('Soy ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Has llamado a ngOnDestroy');
  }
}
