import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTemplateDrivenComponent } from './registration-template-driven.component';

describe('RegistrationTemplateDrivenComponent', () => {
  let component: RegistrationTemplateDrivenComponent;
  let fixture: ComponentFixture<RegistrationTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationTemplateDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
