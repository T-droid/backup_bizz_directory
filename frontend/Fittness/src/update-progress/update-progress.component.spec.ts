import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgressComponent } from './update-progress.component';

describe('UpdateProgressComponent', () => {
  let component: UpdateProgressComponent;
  let fixture: ComponentFixture<UpdateProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
