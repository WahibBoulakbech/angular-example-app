import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceTableComponent } from './commerce-table.component';

describe('CommerceTableComponent', () => {
  let component: CommerceTableComponent;
  let fixture: ComponentFixture<CommerceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommerceTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
