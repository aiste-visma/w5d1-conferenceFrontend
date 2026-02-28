import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSessionPageContainer } from './new-session-page-container';

describe('NewSessionPageContainer', () => {
  let component: NewSessionPageContainer;
  let fixture: ComponentFixture<NewSessionPageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSessionPageContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSessionPageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
