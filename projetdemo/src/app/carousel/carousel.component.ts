import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % 3;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + 3) % 3;
  }
}
