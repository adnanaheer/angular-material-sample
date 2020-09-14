import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'my-app';
  slides = [
    { image: 'assets/2.jpg' },
    { image: 'assets/3.jpg' },
    { image: 'assets/4.jpg' },
    { image: 'assets/5.jpg' },
    { image: 'assets/6.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

