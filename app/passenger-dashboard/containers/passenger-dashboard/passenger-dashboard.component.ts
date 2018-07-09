import { Component, OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>#1 Airline Passengers</h3>
            <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
                <span
                class="status"
                [class.checked-in]="passenger.checkedIn"></span>
                {{ i }}: {{ passenger.fullname }}
                <div>
                Checked in date: {{ passenger.checkInDate ? (passenger.checkInDate | date) : 'Not checked in' | uppercase}}
                </div>
            </li>
            </ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor() { 
        console.log("Inside constructor");
    }

    ngOnInit() {
        console.log("Inside ngOnInit");
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000
        }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null
        }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000
        }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkInDate: 1488412800000
        }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: null
        }];
    }
}