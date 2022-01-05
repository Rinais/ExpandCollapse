import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/BikeInterface/IBike';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data: IBike[] = [];
  constructor() { }

  ngOnInit(): void {
    this.data=[
      {
        "Vehicle":"Bikes",
        "Name":"All",
        "Capacity": 0,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Bajaj pulsar RS200",
        "Capacity": 155,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Bajaj Dominar 400",
        "Capacity": 400,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Yamaha R15 v3",
        "Capacity": 155,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"KTM duke",
        "Capacity": 390,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Yamaha R3",
        "Capacity": 300,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Apache RR 310",
        "Capacity": 310,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Pulsar NS200",
        "Capacity": 200,
        "type": 0
      },
      {
        "Vehicle":"Bikes",
        "Name":"Ninja 300",
        "Capacity": 300,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"All",
        "Capacity": 0,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"Fortuner",
        "Capacity": 5000,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"Tata Altis",
        "Capacity": 2000,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"BMW",
        "Capacity": 5000,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"Benz",
        "Capacity": 3000,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"Glanza",
        "Capacity": 2000,
        "type": 0
      },
      {
        "Vehicle":"Cars",
        "Name":"Creta",
        "Capacity": 1000,
        "type": 0
      },      
    ];
  }
  toggleOn(Vehicle: string){
    for(let row of this.data){
      if(row.Vehicle == Vehicle)
      row.type = 1;
    }
  }
  toggleOff(Vehicle: string){
    for(let row of this.data){
      if(row.Vehicle == Vehicle)
      row.type = 0;
    }
  }
}
