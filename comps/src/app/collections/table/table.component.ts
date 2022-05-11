import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //Didn't work with 'data = []';
  @Input() data: any[] = [];
  @Input() headers: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
