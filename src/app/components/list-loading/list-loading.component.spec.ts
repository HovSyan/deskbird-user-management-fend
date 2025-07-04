import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadingComponent } from './list-loading.component';

describe('ListLoadingComponent', () => {
  let component: ListLoadingComponent;
  let fixture: ComponentFixture<ListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
