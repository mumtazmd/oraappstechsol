import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JobService {
//   getJobById(jobId: number): Job | undefined {
//     throw new Error('Method not implemented.');
//   }
  // private jobs: Job[] = [
  //   {
  //     id: 1,
  //     title: 'Frontend Developer',
  //     location: 'Remote',
  //     experience:3,
  //     type: 'Full-time',
  //     description: 'Develop Angular applications...',
  //     requirements: ['Angular', 'TypeScript', 'RxJS']
  //   },
  //   {
  //     id: 2,
  //     title: 'Backend Developer',
  //     location: 'Remote',
  //     experience:3,
  //     type: 'Full-time',
  //     description: 'Develop Python applications...',
  //     requirements: ['Python','Angular', 'TypeScript', 'RxJS']
  //   },
  //   {
  //     id: 3,
  //     title: 'SQL',
  //     location: 'Remote',
  //     experience:3,
  //     type: 'Full-time',
  //     description: 'sql developer',
  //     requirements: ['SQL','Angular', 'TypeScript', 'RxJS']
  //   },
  //   {
  //     id: 4,
  //     title: 'Azure DevOps',
  //     location: 'Remote',
  //     experience:3,
  //     type: 'Full-time',
  //     description: 'Azure DevOps',
  //     requirements: ['Azure','Angular', 'TypeScript', 'RxJS']
  //   },
  //   // Add more mock jobs
  // ];
  private apiUrl = 'http://localhost:5000/api/jobs';
  constructor(private http: HttpClient) {}


  getJobs() {
    return this.http.get<any[]>(this.apiUrl); // 👈 Add <any[]>
  }

  // getJobs() {
  //   return of(this.jobs).pipe(delay(500));
  // }

  // getJobById(id: number): Job | undefined {
  //   return this.jobs.find(job => job.id === id);
  // }

  // getJob(id: number) {
  //   return of(this.jobs.find(job => job.id === id)).pipe(delay(500));
  // }
}