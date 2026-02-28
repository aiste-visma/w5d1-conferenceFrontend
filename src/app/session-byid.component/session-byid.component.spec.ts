import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionByIdComponent } from './session-byid.component';

describe('SessionByIdComponent', () => {
  let component: SessionByIdComponent;
  let fixture: ComponentFixture<SessionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
