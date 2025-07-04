import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingServiceWaitComponent } from './hosting-service-wait.component';

describe('HostingServiceWaitComponent', () => {
  let component: HostingServiceWaitComponent;
  let fixture: ComponentFixture<HostingServiceWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingServiceWaitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingServiceWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
