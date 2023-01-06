import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengtableComponent } from './primengtable.component';

describe('PrimengtableComponent', () => {
  let component: PrimengtableComponent;
  let fixture: ComponentFixture<PrimengtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
