import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Array<any> = []
  activeCar: Array<any>=[]
  activated = false


  constructor(
    private carService: CarsService
  ) { }

  ngOnInit(): void {
    this.loadCars()
  }

  loadCars():void{
    this.carService.getAllFB().subscribe(data=>{
      this.cars = data
      this.activeCar.push(this.cars[0])
    })
  }

  activateCar(car:any):void{
    this.activeCar[0] = car
    this.activated = true
    
  }

}
