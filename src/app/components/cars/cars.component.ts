import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.maxLength(1), Validators.maxLength(20)]),
      price: new FormControl(null, [Validators.min(0), Validators.maxLength(1000000)]),
      year: new FormControl(null, [Validators.min(1990), Validators.maxLength(new Date().getFullYear())])
    })
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
        this.form.reset()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null
      })
    }

  }

  update(car: ICar): void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }
}
