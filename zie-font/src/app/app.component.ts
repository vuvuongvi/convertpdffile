import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  downloadPDF() {
    var doc = new jsPDF();
    doc.text('Welcome to my pdf file, author by VuVuongVi', 10, 10);
    doc.save('TestDemo.pdf');
  }
}


