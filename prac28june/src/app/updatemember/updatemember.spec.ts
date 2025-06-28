import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatemember } from './updatemember';

describe('Updatemember', () => {
  let component: Updatemember;
  let fixture: ComponentFixture<Updatemember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatemember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatemember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
