import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,  // Animation duration (adjust as needed)
      once: false,      // Ensures animation replays when scrolling up
      mirror: true      // Replays animation when scrolling up
    });
  }
  contactForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/send-email', this.contactForm.value)
        .subscribe(
          (response) => {
            console.log('Email sent successfully', response);
            alert('Your message has been sent!');
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error sending email', error);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  }
}
