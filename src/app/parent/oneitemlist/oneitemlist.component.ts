import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/services/Course';

@Component({
  selector: 'app-oneitemlist',
  templateUrl: './oneitemlist.component.html',
  styleUrls: ['./oneitemlist.component.scss'],
})
export class OneitemlistComponent implements OnInit {
  @Input() item : Course ;
  constructor() { }

  ngOnInit() {}

}
