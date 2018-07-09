import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div [innerHtml]="title"></div>
    <input [value]="title">
  `
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Kaushik\'s Ultimate Angular';
  }

}