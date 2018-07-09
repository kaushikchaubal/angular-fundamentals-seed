import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <input 
    [value]="title"
    (input) = "handle($event)">

    <template [ngIf] = "title.length > 2">
      <div>
        Searching for ... {{ title }}
      </div>
    </template>

    <div *ngIf="title.length > 2">
      Searching for ... {{ title }}
    </div>
  `
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = '';
  }

  handle(event: any) {
    this.title = event.target.value;
  }
}