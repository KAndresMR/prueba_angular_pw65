import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  private results:Array<{numero:number}> = []

  constructor() { 
    const savedResults = localStorage.getItem('results')
    if (savedResults) {
      this.results = JSON.parse(savedResults)
    }
  }

  addResult(result: {numero: number}) {
    this.results.push(result)
    this.updateLocalStorage();
  }

  getResults() {
    return this.results
  }

  private updateLocalStorage() {
    localStorage.setItem('results', JSON.stringify(this.results))
  }

  eliminar(index:number) {
    this.results.splice(index, 1)
    this.updateLocalStorage()
  }






}
