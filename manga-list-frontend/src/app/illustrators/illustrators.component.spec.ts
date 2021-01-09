import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorsComponent } from './illustrators.component';

describe('IllustratorsComponent', () => {
  let component: IllustratorsComponent;
  let fixture: ComponentFixture<IllustratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
