import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMenuComponent } from './administrator-menu.component';

describe('AdministratorMenuComponent', () => {
  let component: AdministratorMenuComponent;
  let fixture: ComponentFixture<AdministratorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
