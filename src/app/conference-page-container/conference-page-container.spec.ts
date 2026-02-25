import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePageContainer } from './conference-page-container';

describe('ConferencePageContainer', () => {
  let component: ConferencePageContainer;
  let fixture: ComponentFixture<ConferencePageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferencePageContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePageContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
