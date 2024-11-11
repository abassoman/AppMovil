import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {


  car:Car = {patente:"",year:0, imageUrl:"",nombre:"", comuna:""}
  constructor(private carService:CarsService) { }

  ngOnInit() {}

  addCar(){
    this.carService.addCar(this.car).then(()=>{
      alert("Agregado Carro Correctamente")
      this.car = {patente:"",year:0, imageUrl:"",nombre:"", comuna:""}
    }).catch(error=>{"Error al Agregar Un Carro "+error})
  }
}
