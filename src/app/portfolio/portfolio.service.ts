import { Injectable } from '@angular/core';

import { PORTFOLIO } from '../data'; 

@Injectable()
export class PortfolioService {

  portfolio : any[] = PORTFOLIO;

  constructor() { this.tube() }

  tube() {
    for (let _resource of this.portfolio) {
      _resource.video_url = `https://www.youtube.com/embed/${ _resource.youtube_code }?el=0&amp;controls=0&amp;showinfo=0`;
      _resource.watch_me = `https://www.youtube.com/watch?v=${ _resource.youtube_code }`
    }
  }

  all() {
    return this.portfolio;
  }

}
