import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoDashboardComponent } from './meteo-dashboard.component';

describe('MeteoDashboardComponent', () => {
  let component: MeteoDashboardComponent;
  let fixture: ComponentFixture<MeteoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteoDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeteoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
