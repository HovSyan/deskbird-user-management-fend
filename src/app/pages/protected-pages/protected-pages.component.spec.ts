import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedPagesComponent } from './protected-pages.component';

describe('ProtectedPagesComponent', () => {
  let component: ProtectedPagesComponent;
  let fixture: ComponentFixture<ProtectedPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
