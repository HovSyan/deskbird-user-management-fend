import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadErrorComponent } from './list-load-error.component';

describe('ListLoadErrorComponent', () => {
  let component: ListLoadErrorComponent;
  let fixture: ComponentFixture<ListLoadErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLoadErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoadErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
