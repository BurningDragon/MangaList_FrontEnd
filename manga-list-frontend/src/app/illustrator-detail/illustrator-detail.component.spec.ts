import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorDetailComponent } from './illustrator-detail.component';

describe('IllustratorDetailComponent', () => {
  let component: IllustratorDetailComponent;
  let fixture: ComponentFixture<IllustratorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustratorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
