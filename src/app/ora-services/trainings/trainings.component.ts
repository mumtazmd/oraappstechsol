import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-trainings',
  imports: [],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
