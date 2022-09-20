import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPrendaComponent } from './put-prenda.component';

describe('PutPrendaComponent', () => {
  let component: PutPrendaComponent;
  let fixture: ComponentFixture<PutPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutPrendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
