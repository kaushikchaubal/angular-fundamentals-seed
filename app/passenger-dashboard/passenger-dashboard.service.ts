import { Passenger } from "./models/passenger.interface";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

const URL: string = 'api/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: Http) {
        console.log(this.http)
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(URL)
            .map((response: Response) => response.json()); 
    }
}