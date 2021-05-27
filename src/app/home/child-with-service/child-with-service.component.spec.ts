import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithServiceComponent } from './child-with-service.component';

describe('ChildWithServiceComponent', () => {
  let component: ChildWithServiceComponent;
  let fixture: ComponentFixture<ChildWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWithServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
