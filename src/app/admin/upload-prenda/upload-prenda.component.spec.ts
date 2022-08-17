import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPrendaComponent } from './upload-prenda.component';

describe('UploadPrendaComponent', () => {
  let component: UploadPrendaComponent;
  let fixture: ComponentFixture<UploadPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPrendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
