import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  slides = [
    { image: 'assets/2.jpg' },
    { image: 'assets/3.jpg' },
    { image: 'assets/4.jpg' },
    { image: 'assets/5.jpg' },
    { image: 'assets/6.jpg' },
  ];
}
