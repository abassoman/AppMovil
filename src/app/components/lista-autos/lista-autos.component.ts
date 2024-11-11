import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from 'src/app/services/cars.service';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.scss'],
})
export class ListaAutosComponent  implements OnInit {

  cars:Car[]=[]
  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getCar().subscribe(cars =>{
      this.cars = cars;
    })
  }

}
