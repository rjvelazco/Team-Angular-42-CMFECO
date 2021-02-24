import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPageFoundComponent } from './not-page-found.component';

describe('NotPageFoundComponent', () => {
  let component: NotPageFoundComponent;
  let fixture: ComponentFixture<NotPageFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPageFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
