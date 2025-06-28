import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMember } from './view-all-member';

describe('ViewAllMember', () => {
  let component: ViewAllMember;
  let fixture: ComponentFixture<ViewAllMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
