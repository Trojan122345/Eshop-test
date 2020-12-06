import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsAlterComponent } from './discounts-alter.component';

describe('DiscountsAlterComponent', () => {
  let component: DiscountsAlterComponent;
  let fixture: ComponentFixture<DiscountsAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
