import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-notes',
  templateUrl: './aws-notes.component.html',
  styleUrls: ['./aws-notes.component.css'],
})
export class AWSNotesComponent implements OnInit {
  yOffset = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTop() {
    this.router.navigateByUrl('articles/AWS-Notes#AWS_Notes');
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    this.yOffset = window.scrollY;
  }

  shouldShowScrollToTopButton() {
    return this.yOffset > 150;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  scroll(divId: string) {
    let el = document.getElementById(divId);
    el != null ? el.scrollIntoView() : '';
  }
}
