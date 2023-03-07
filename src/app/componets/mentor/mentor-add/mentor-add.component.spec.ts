import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAddComponent } from './mentor-add.component';

describe('MentorAddComponent', () => {
  let component: MentorAddComponent;
  let fixture: ComponentFixture<MentorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
