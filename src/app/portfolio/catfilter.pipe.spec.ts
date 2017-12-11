/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CatfilterPipe } from './catfilter.pipe';

const PORTFOLIO_MOCKS = [
  {
    id: 1,
    caption: 'Documentary DoSol 10 Years',
    category: 'documentary'
  },
  {
    id: 2,
    caption: 'Awesome Show 2016',
    category: 'shows'
  }
];

describe('CatfilterPipe', () => {
  let pipe : CatfilterPipe;
  let _portfolio = PORTFOLIO_MOCKS;

  beforeEach(() => pipe = new CatfilterPipe());

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing category should filter portfolio', ()=> {
    expect(pipe.transform(_portfolio, 'shows')[0].id).toEqual(2);
  });

  it('providing no category should return all portfolio', ()=> {
    expect(pipe.transform(_portfolio, undefined)).toBe(_portfolio);
  });
});