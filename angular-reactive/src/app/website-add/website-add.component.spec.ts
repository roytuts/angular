import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAddComponent } from './website-add.component';

describe('WebsiteAddComponent', () => {
  let component: WebsiteAddComponent;
  let fixture: ComponentFixture<WebsiteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
