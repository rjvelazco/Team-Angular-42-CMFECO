import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsAvailableComponent } from './groups-available.component';

describe('GroupsAvailableComponent', () => {
  let component: GroupsAvailableComponent;
  let fixture: ComponentFixture<GroupsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
