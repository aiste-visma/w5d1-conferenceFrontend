import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailPageContainer } from './session-detail-page-container';

describe('SessionDetailPageContainer', () => {
  let component: SessionDetailPageContainer;
  let fixture: ComponentFixture<SessionDetailPageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionDetailPageContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDetailPageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
