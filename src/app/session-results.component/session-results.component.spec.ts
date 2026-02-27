import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionResultsComponent } from './session-results.component';

describe('SessionResultsComponent', () => {
  let component: SessionResultsComponent;
  let fixture: ComponentFixture<SessionResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionResultsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
