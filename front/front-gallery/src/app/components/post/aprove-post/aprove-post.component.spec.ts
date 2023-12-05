import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovePostComponent } from './aprove-post.component';

describe('AprovePostComponent', () => {
  let component: AprovePostComponent;
  let fixture: ComponentFixture<AprovePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
