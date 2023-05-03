import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  AppSettings = AppSettings;

  constructor(
  ) {}

}
