import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAgencyComponent } from './delete-agency.component';

describe('DeleteAgencyComponent', () => {
  let component: DeleteAgencyComponent;
  let fixture: ComponentFixture<DeleteAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
