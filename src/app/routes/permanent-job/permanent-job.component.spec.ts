import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentJobComponent } from './permanent-job.component';

describe('PermanentJobComponent', () => {
  let component: PermanentJobComponent;
  let fixture: ComponentFixture<PermanentJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
