import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div [innerHtml]="title"></div>
    <input 
    [value]="title"
    (blur) = "handle($event)">
    <input [(ngModel)]="title">
  `
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Kaushik\'s Ultimate Angular';
  }

  handle(event: any) {
    this.title = event.target.value;
  }

  magic(value: any) {
    this.title = value;
  }

}