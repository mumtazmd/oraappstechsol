import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, HostListener, ElementRef, ViewChild, } from '@angular/core';
import { Job } from '../models/job.model';
import { RouterLink } from '@angular/router';
import { JobService } from '../services/job.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements AfterViewInit {
//   isRecruitVisible = false;
//   toggleRecruit() {
//     this.isRecruitVisible = !this.isRecruitVisible;
// }
  jobs: Job[] = [];
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
  constructor(private jobService: JobService) {}
  ngOnInit(): void {
    // this.jobs = this.jobService.getJobs();
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs; // Assign array when Observable emits
    });

  }
}
