import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepageComponent } from './updatepage.component';

describe('UpdatepageComponent', () => {
  let component: UpdatepageComponent;
  let fixture: ComponentFixture<UpdatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
