import { Component, OnInit} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any; 

@Component({
  selector: 'app-popup-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.scss'
})
export class PopupModalComponent implements OnInit {
  user = { name: '', email: '' };
  ngOnInit() {
    this.showPopup();
  }
  showPopup() {
    const modalElement = document.getElementById('popupModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  submitForm() {
    console.log("User Data:", this.user);
    alert("Form Submitted Successfully!");
  }
}
