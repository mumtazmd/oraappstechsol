import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-gen-ai',
  imports: [],
  templateUrl: './gen-ai.component.html',
  styleUrl: './gen-ai.component.scss'
})
export class GenAiComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
