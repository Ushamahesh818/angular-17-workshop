import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDemo1Component } from './message-demo-1.component';

describe('MessageDemo1Component', () => {
  let component: MessageDemo1Component;
  let fixture: ComponentFixture<MessageDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDemo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
