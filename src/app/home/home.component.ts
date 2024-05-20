import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'NewFaceX';
  searchVisible = false;
 

@Output() homeEvent = new EventEmitter<string>();
@Output() topEvent = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const inputElement = this.elementRef.nativeElement.querySelector('#searchBar');
    const searchElement = this.elementRef.nativeElement.querySelector('#search');
    searchElement.addEventListener('click', () => {
      searchElement.classList.toggle('active');
      inputElement.classList.toggle('active');
    });
  }
  openSearch() {
    this.searchVisible = !this.searchVisible;
  }
  openHome() {
  
    this.homeEvent.emit("home");
  }
  openTop() {
    this.topEvent.emit("top");
  }
}
