import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnagramTesterComponent } from './anagram-tester.component';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

fdescribe('AnagramTesterComponent', () => {
  let component: AnagramTesterComponent;
  let fixture: ComponentFixture<AnagramTesterComponent>;
  let firstWord: AbstractControl;
  let secondWord: AbstractControl;

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
    component.ngOnInit();
    fixture.detectChanges();
    firstWord = component.anagramForm.controls.firstWord;
    secondWord = component.anagramForm.controls.secondWord;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a anagram firstWord input field ', () => {
    expect(firstWord.valid).toBeFalsy();
    expect(firstWord.hasError('required')).toBeTruthy();
    expect(firstWord.pristine).toBeTruthy();
  });
  it('anagram first word should not be empty', () => {
    firstWord.setValue('');
    expect(firstWord.hasError('required')).toBeTruthy();
  });
  it('should have a anagram secondWord input field ', () => {
    expect(secondWord.valid).toBeFalsy();
    expect(secondWord.hasError('required')).toBeTruthy();
    expect(secondWord.pristine).toBeTruthy();
  });
  it('anagram second word should not be empty', () => {
    secondWord.setValue('');
    expect(secondWord.hasError('required')).toBeTruthy();
  });
  it('Anagram Tester - False - case1', () => {
    firstWord.setValue('restfull');
    secondWord.setValue('flusters');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
  it('Anagram Tester - False - case2', () => {
    firstWord.setValue('arm');
    secondWord.setValue('elbow');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
  it('Anagram Tester - False - case3', () => {
    firstWord.setValue('left');
    secondWord.setValue('right');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
  it('Anagram Tester - False - case4', () => {
    firstWord.setValue('less');
    secondWord.setValue('more');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
  it('Anagram Tester - False - case5', () => {
    firstWord.setValue('cone');
    secondWord.setValue('gone');
    expect(component.onCheckAnagram()).toBeFalsy();
  });
  it('Anagram Tester - True - case1', () => {
    firstWord.setValue('restful');
    secondWord.setValue('fluster');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
  it('Anagram Tester - True - case2', () => {
    firstWord.setValue('cellar');
    secondWord.setValue('recall');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
  it('Anagram Tester - True - case3', () => {
    firstWord.setValue('listen');
    secondWord.setValue('silent');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
  it('Anagram Tester - True - case4', () => {
    firstWord.setValue('night');
    secondWord.setValue('thing');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
  it('Anagram Tester - True - case5', () => {
    firstWord.setValue('who');
    secondWord.setValue('how');
    expect(component.onCheckAnagram()).toBeTruthy();
  });
});
