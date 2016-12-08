import { 
  Component,
  trigger,
  state,
  style,
  group,
  transition,
  animate
} from '@angular/core';

import { PortfolioService } from './portfolio.service';
import { CATEGORIES } from '../data';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('magic', [
      state('true', style({ transform: 'scale(1)', opacity: 1 })),
      transition('void => *', [
        group([
          animate('1s 0.1s ease', style({ transform: 'scale(1)' })),
          animate('1s ease', style({ opacity: 1 }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.6s ease', style({ transform: 'scale(0)' })),
          animate('0.6s 0.6s ease', style({ opacity: 0 }))
        ])
      ])
    ])
  ]
})
export class PortfolioComponent {
  categories = CATEGORIES;
  portfolio;

  constructor(private portfolioService : PortfolioService) {
    this.portfolio = this.portfolioService.all();
  }
}
