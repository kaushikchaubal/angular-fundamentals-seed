import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <div>
        <span class="status" [class.checked-in]="detail.checkedIn"></span>
        {{ detail.fullname }}
        <div> Checked in date: {{ detail.checkInDate ? (detail.checkInDate | date) : 'Not checked in' | uppercase}}
    </div>
    </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger

}