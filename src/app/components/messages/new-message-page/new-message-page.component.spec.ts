import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessagePageComponent } from './new-message-page.component';

describe('NewMessagePageComponent', () => {
  let component: NewMessagePageComponent;
  let fixture: ComponentFixture<NewMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMessagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
