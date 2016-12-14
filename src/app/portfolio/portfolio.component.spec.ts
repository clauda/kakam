/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

import { CatfilterPipe } from './catfilter.pipe';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let portfolioService : PortfolioService;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PortfolioComponent,
        CatfilterPipe 
      ],
      providers: [ PortfolioService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    portfolioService = TestBed.get(PortfolioService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have categories', () => {
    expect(component.categories).toBeDefined();
  });

  it('should have portfolio', () => {
    expect(component.portfolio).toBeDefined();
  });

  it('.setSafeMedia should be defined', () => {
    expect(component.setSafeMedia).toBeTruthy();
  });
  
  it('should have trustedResource', () => {
    component.setSafeMedia('http://youtu.be/unsafe');
    fixture.detectChanges();
    expect(component.trustedResource).toBeDefined();
  });

  it('PortfolioService should be injected', 
    inject([ PortfolioService ], (injectedService: PortfolioService) => {
      expect(injectedService).toBe(portfolioService);
    })
  );

});
