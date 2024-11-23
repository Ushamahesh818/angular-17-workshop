import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJobComponent } from './contract-job.component';

describe('ContractJobComponent', () => {
  let component: ContractJobComponent;
  let fixture: ComponentFixture<ContractJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
