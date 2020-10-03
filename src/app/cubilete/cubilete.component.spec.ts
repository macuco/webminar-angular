import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubileteComponent } from './cubilete.component';

describe('CubileteComponent', () => {
  let component: CubileteComponent;
  let fixture: ComponentFixture<CubileteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubileteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubileteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
