import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-software-development',
  imports: [],
  templateUrl: './software-development.component.html',
  styleUrl: './software-development.component.scss'
})
export class SoftwareDevelopmentComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
