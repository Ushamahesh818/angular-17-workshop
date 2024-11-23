import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDemo2Component } from './message-demo-2.component';

describe('MessageDemo2Component', () => {
  let component: MessageDemo2Component;
  let fixture: ComponentFixture<MessageDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDemo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
