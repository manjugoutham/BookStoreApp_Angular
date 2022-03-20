import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrederListComponent } from './all-oreder-list.component';

describe('AllOrederListComponent', () => {
  let component: AllOrederListComponent;
  let fixture: ComponentFixture<AllOrederListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrederListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrederListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
