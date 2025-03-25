import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-joblist',
  imports: [CommonModule],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss'
})
export class JoblistComponent implements OnInit {
  jobs: any[] = [];
  constructor(private jobService: JobService) {
    
    // this.jobService.getJobs().subscribe({
    //   next: (data: any[]) => this.jobs = data,
    //   error: (err) => console.error('Oops!', err)
    // });
  }
  ngOnInit() {
    this.loadJobs();
  }
  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (data: any[]) => {
        console.log('Received jobs:', data); // 👈 Check console
        this.jobs = data;
      },
      error: (err) => console.error('Error loading jobs:', err)
    });
  }

}
