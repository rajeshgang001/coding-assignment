import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anagram-tester',
  templateUrl: './anagram-tester.component.html',
  styleUrls: ['./anagram-tester.component.css']
})

export class AnagramTesterComponent implements OnInit {
  anagramForm: FormGroup;
  anagramMsg: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAnagramForm();
  }

  initAnagramForm(): void {
    this.anagramForm = this.fb.group({
      firstWord: ['', Validators.required],
      secondWord: ['', Validators.required]
    });
  }

  get controls(): any {
    return this.anagramForm.controls;
  }

  onCheckAnagram(): boolean {
    const firstWord = this.anagramForm.controls.firstWord.value.split('').sort().join('');
    const secondWord = this.anagramForm.controls.secondWord.value.split('').sort().join('');
    if (firstWord === secondWord) {
      this.anagramMsg = 'Both words are Anagrams';
      return true;
    }
    else {
      this.anagramMsg = 'Both words are NOT Anagrams';
      return false;
    }
  }
}
