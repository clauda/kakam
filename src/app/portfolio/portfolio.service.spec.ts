/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service : PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PortfolioService ]
    });
    service = TestBed.get(PortfolioService);
  });

  it('should ...', inject([PortfolioService], (service: PortfolioService) => {
    expect(service).toBeTruthy();
  }));

  it('.all should be defined', inject([PortfolioService], (service: PortfolioService) => {
    expect(service.all).toBeDefined();
  }));

  it('.tube should be defined', inject([PortfolioService], (service: PortfolioService) => {
    expect(service.tube).toBeDefined();
  }));

  it('.tube should set youtube urls', fakeAsync(() => {
    service.portfolio = [{ youtube_code: 'yOuTuBe' }];
    service.tube();
    tick();
    expect(service.all()[0].image_url).not.toBeNull();
  }));
});
