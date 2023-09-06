import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-notes-for-interview',
  templateUrl: './aws-notes-for-interview.component.html',
  styleUrls: ['./aws-notes-for-interview.component.css'],
})
export class AWSNotesForInterviewComponent implements OnInit {
  yOffset = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTop() {
    this.router.navigateByUrl('articles/AWS-Notes-for-Interview#AWS_Notes');
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    this.yOffset = window.scrollY;
  }

  shouldShowScrollToTopButton() {
    return this.yOffset > 150;
  }
}
