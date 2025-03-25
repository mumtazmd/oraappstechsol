import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ux-ui-design',
  imports: [],
  templateUrl: './ux-ui-design.component.html',
  styleUrl: './ux-ui-design.component.scss'
})
export class UxUiDesignComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
}
