import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anagram-tester',
  templateUrl: './anagram-tester.component.html',
  styleUrls: ['./anagram-tester.component.css']
})

export class AnagramTesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onCheckAnagram(form: NgForm) {
      if (form.value.firstWord.split("").sort().join("") === form.value.secondWord.split("").sort().join(""))
        alert('Both words are anagrams');
      else alert('Both words are NOT anagrams');
  }
}
