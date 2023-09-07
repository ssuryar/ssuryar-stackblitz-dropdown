import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form id="testForm">
      <select name="testSelect" id="selectForm" (change)="changeMe($event)">
        <option *ngFor="let city of countries" value={{city}}>{{city}}</option>
      </select>
      {{displayCity}}
    </form>
  `,
})
export class App {
  name = 'Angular';
  countries = ['India', 'China', 'Russia', 'USA', 'UK'];
  displayCity = '';

  changeMe(evt: any) {
    console.log(evt.target.value);
    this.displayCity = evt.target.value;
  }
}

bootstrapApplication(App);
