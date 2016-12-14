import { Component, AfterViewInit } from '@angular/core';

import { VIDEOMAKER } from './data';

import * as wow from 'wowjs';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public videomaker = VIDEOMAKER;

  ngAfterViewInit(){
    new wow.WOW().init(); 
  }
}
