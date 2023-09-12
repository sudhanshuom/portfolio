import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  @Output() updateA = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToUrl(type:any){
    this.updateA.emit('app-aws-notes');
  }

}
