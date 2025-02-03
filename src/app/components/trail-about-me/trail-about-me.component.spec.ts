import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailAboutMeComponent } from './trail-about-me.component';

describe('TrailAboutMeComponent', () => {
  let component: TrailAboutMeComponent;
  let fixture: ComponentFixture<TrailAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrailAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
