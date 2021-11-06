import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnagramTesterComponent } from './anagram-tester.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('AnagramTesterComponent', () => {
  let component: AnagramTesterComponent;
  let fixture: ComponentFixture<AnagramTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnagramTesterComponent],
      imports: [ReactiveFormsModule]
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
  it('should have a anagram firstWord input field ', () => {
    const firstWord = component.anagramForm.controls.firstWord;
    expect(firstWord.valid).toBeFalsy();
    expect(firstWord.hasError('required')).toBeTruthy();
    expect(firstWord.pristine).toBeTruthy();
  });
  it('anagram first word should not be empty', () => {
    const firstWord = component.anagramForm.controls.firstWord;
    firstWord.setValue('');
    expect(firstWord.hasError('required')).toBeTruthy();
  });
  it('should have a anagram secondWord input field ', () => {
    const secondWord = component.anagramForm.controls.secondWord;
    expect(secondWord.valid).toBeFalsy();
    expect(secondWord.hasError('required')).toBeTruthy();
    expect(secondWord.pristine).toBeTruthy();
  });
  it('anagram second word should not be empty', () => {
    const secondWord = component.anagramForm.controls.secondWord;
    secondWord.setValue('');
    expect(secondWord.hasError('required')).toBeTruthy();
  });
  it('Anagram Tester - True', () => {
    const firstWord = component.anagramForm.controls.firstWord;
    const secondWord = component.anagramForm.controls.secondWord;
    firstWord.setValue('restful');
    secondWord.setValue('fluster');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
  it('Anagram Tester - False', () => {
    const firstWord = component.anagramForm.controls.firstWord;
    const secondWord = component.anagramForm.controls.secondWord;
    firstWord.setValue('restfull');
    secondWord.setValue('flusters');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
});
