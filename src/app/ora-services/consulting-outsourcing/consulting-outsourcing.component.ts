import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-consulting-outsourcing',
  imports: [],
  templateUrl: './consulting-outsourcing.component.html',
  styleUrl: './consulting-outsourcing.component.scss'
})
export class ConsultingOutsourcingComponent {
  ngOnInit() {
    AOS.init();
 }
}
