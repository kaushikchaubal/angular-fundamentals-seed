import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <passenger-form
                [detail]="passenger"
                (update)="onPassengerUpdate($event)">
            </passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(private passengerService: PassengerDashboardService) {}

    ngOnInit() {
        this.passengerService
            .getPassenger(1)
            .then((data: Passenger) => this.passenger = data);
    }

    onPassengerUpdate(passenger: Passenger) {
        this.passengerService
            .updatePassenger(passenger)
            .then((data: Passenger) => {
                this.passenger = data
                console.log(data);
            });
    }
}