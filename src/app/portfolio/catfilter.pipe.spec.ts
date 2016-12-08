/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CatfilterPipe } from './catfilter.pipe';

const PORTFOLIO_MOCKS = [
  {
    caption: 'Documentary DoSol 10 Years',
    categories: [ 'documentary', 'webseries' ]
  },
  {
    caption: 'Awesome Show 2016',
    categories: [ 'documentary', 'shows' ]
  }
];

describe('CatfilterPipe', () => {
  let pipe : CatfilterPipe;
  let _portfolio = PORTFOLIO_MOCKS;

  beforeEach(()=> pipe = new CatfilterPipe());

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing category should filter portfolio', ()=> {
    expect(pipe.transform(_portfolio, 'shows')[0].caption).toBe('Awesome Show 2016');
  });

  it('providing no category should return all portfolio', ()=> {
    expect(pipe.transform(_portfolio, undefined)).toBe(_portfolio);
  });
});