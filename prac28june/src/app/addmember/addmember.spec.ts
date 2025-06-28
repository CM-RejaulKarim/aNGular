import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmember } from './addmember';

describe('Addmember', () => {
  let component: Addmember;
  let fixture: ComponentFixture<Addmember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addmember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
