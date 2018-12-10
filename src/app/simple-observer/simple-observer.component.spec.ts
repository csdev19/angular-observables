import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleObserverComponent } from './simple-observer.component';

describe('SimpleObserverComponent', () => {
  let component: SimpleObserverComponent;
  let fixture: ComponentFixture<SimpleObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
