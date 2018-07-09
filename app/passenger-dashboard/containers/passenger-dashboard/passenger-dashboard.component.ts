import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(private passengerService: PassengerDashboardService) { }
    ngOnInit() {
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data);
    }
    handleEdit(event: Passenger) {
        // Not implemented because I don't see value in adding the logic here
        console.log(event);
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                console.log(data)
            });
    }
    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter((pass: Passenger) => {
            return pass.id != event.id;
        })
    }
}