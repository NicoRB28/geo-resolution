import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResponseComponent } from './home-response.component';

describe('HomeResponseComponent', () => {
  let component: HomeResponseComponent;
  let fixture: ComponentFixture<HomeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
