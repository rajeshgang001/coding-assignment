import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramTesterComponent } from './anagram-tester.component';

describe('AnagramTesterComponent', () => {
  let component: AnagramTesterComponent;
  let fixture: ComponentFixture<AnagramTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagramTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
