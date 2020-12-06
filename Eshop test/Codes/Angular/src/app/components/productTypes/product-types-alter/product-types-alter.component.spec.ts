import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesAlterComponent } from './product-types-alter.component';

describe('ProductTypesAlterComponent', () => {
  let component: ProductTypesAlterComponent;
  let fixture: ComponentFixture<ProductTypesAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypesAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypesAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
