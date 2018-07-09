import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <div>
            Formss!
            {{detail | json }}
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger
}