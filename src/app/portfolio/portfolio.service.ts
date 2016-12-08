import { Injectable } from '@angular/core';

import { PORTFOLIO } from '../data'; 

@Injectable()
export class PortfolioService {

  portfolio : any[] = PORTFOLIO;

  constructor() { }

  all() {
    return this.portfolio;
  }

}
