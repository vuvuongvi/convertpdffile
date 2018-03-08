import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-autotable',
  templateUrl: './autotable.component.html',
  styleUrls: ['./autotable.component.css']
})
export class AutotableComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  downloadpdf1() {
  const columns = ['ID', 'Name', 'Country'];
  const rows = [
    [1, 'Tran Thuy Phuong', 'Viet Nam', ],
    [2, 'Vu Xuan Vinh', 'Viet Nam', ],
    [3, 'Vu Vuong Vi', 'Viet Nam', ]
  ];

  const doc1 = new jsPDF('p', 'pt');
    doc1.autoTable(columns, rows, {
      styles: {fillColor: [100, 255, 255]},
      columnStyles: {
        id: {fillColor: 255}
      },
      margin: {top: 60},
      addPageContent: function(data) {
        doc1.text('Header', 40, 30);
      }
    });
    doc1.save('table.pdf');
  }

}
