import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatruleComponent } from './statrule.component';

describe('StatruleComponent', () => {
  let component: StatruleComponent;
  let fixture: ComponentFixture<StatruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
