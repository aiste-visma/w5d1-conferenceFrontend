import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerResultsComponent } from './speaker-results.component';

describe('SpeakerResultsComponent', () => {
  let component: SpeakerResultsComponent;
  let fixture: ComponentFixture<SpeakerResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerResultsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
