import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutotableComponent } from './autotable.component';

describe('AutotableComponent', () => {
  let component: AutotableComponent;
  let fixture: ComponentFixture<AutotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
