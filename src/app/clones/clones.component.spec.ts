import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonesComponent } from './clones.component';

describe('ClonesComponent', () => {
  let component: ClonesComponent;
  let fixture: ComponentFixture<ClonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
