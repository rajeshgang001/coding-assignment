import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anagram-tester',
  templateUrl: './anagram-tester.component.html',
  styleUrls: ['./anagram-tester.component.css']
})

export class AnagramTesterComponent implements OnInit {
  error: string = null;

  constructor() { }

  ngOnInit(): void { }

  onCheckAnagram(form: NgForm) {
    if (form.value.firstWord.length == form.value.secondWord.length) {
      this.error = null;
      if (form.value.firstWord.split("").sort().join("") === form.value.secondWord.split("").sort().join(""))
        alert('Both words are anagrams');
      else alert('Both words are NOT anagrams');
    }
    else {
      this.error = "Both words are not equal in lengths";
    }
  }
}
