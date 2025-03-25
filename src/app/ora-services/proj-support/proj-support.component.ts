import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-proj-support',
  imports: [],
  templateUrl: './proj-support.component.html',
  styleUrl: './proj-support.component.scss'
})
export class ProjSupportComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
