import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  constructor(private modalService: NgbModal) {}
  headersection = 'assets/images/hero-banner.jpg';
  // technologies = ['Python', 'Java', 'Node.js', 'Angular', 'React'];
  isSticky: boolean = false;
  technologies = [
    { name: 'Python', link: 'https://apply-python.com' },
    { name: 'Java', link: 'https://apply-java.com' },
    { name: 'Node.js', link: 'https://apply-node.com' },
    { name: 'Angular', link: 'https://apply-angular.com' }
  ];

  currentIndex = 0;

  ngOnInit() {
    this.startMarquee();
  }

  startMarquee() {
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.technologies.length;
      this.startMarquee(); // Call itself after 3 seconds
    }, 3000);
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.isSticky = scrollPosition > 80;
  }
  // openApplyModal() {
  //   this.modalService.open(PopupModalComponent, {
  //     centered: true,
  //     size: 'lg'
  //   });
  // }

}
