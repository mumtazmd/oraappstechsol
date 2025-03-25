import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobService } from '../services/job.service';
import { Job } from '../models/job.model';


@Component({
  selector: 'app-job-detail',
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;
  showForm: boolean = false;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    // this.job = this.jobService.getJobById(jobId);
  }

  showApplicationForm(): void {
    this.showForm = true;
  }
}
