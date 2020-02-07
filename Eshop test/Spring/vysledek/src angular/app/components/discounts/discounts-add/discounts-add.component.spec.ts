import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsAddComponent } from './discounts-add.component';

describe('DiscountsAddComponent', () => {
  let component: DiscountsAddComponent;
  let fixture: ComponentFixture<DiscountsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
