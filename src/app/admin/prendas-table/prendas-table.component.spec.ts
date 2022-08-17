import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendasTableComponent } from './prendas-table.component';

describe('PrendasTableComponent', () => {
  let component: PrendasTableComponent;
  let fixture: ComponentFixture<PrendasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrendasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
