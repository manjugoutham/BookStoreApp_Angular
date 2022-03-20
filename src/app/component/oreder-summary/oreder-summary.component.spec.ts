import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederSummaryComponent } from './oreder-summary.component';

describe('OrederSummaryComponent', () => {
  let component: OrederSummaryComponent;
  let fixture: ComponentFixture<OrederSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrederSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrederSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
