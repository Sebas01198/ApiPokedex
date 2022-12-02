import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOneComponent } from './vista-one.component';

describe('VistaOneComponent', () => {
  let component: VistaOneComponent;
  let fixture: ComponentFixture<VistaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
