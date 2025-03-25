import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements AfterViewInit{
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
