import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerComponentComponent } from './entertainer-component.component';

describe('EntertainerComponentComponent', () => {
  let component: EntertainerComponentComponent;
  let fixture: ComponentFixture<EntertainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
