import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionService } from '../../services/operacion.service';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.scss'
})
export class OperacionesComponent implements OnInit{
  firstNumber: number = 0
  secondNumber: number = 0
  result: number = 0

  results:Array<{numero:number}> = []


  constructor(private operacioneService: OperacionService) {}


  ngOnInit(): void {
    this.results = this.operacioneService.getResults()
  }

  onSubmit() {

  }

  saveOnLocalStorage() {
    this.operacioneService.addResult({
      numero: this.result, 
    });
  }

  eliminar(index:number) {
    this.operacioneService.eliminar(index)
    this.results = this.operacioneService.getResults() // Actualizar la lista de tareas
  }


  sumar() {
    this.result = this.firstNumber + this.secondNumber;
    this.saveOnLocalStorage();
  }

  restar() {
    this.result = this.firstNumber - this.secondNumber;
    this.saveOnLocalStorage();
  }

  multiplicar() {
    this.result = this.firstNumber * this.secondNumber;
    this.saveOnLocalStorage();
  }

  dividir() {
    this.result = this.firstNumber / this.secondNumber;
    this.saveOnLocalStorage();
  }

}
