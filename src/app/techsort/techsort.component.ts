import { Component, OnInit } from '@angular/core';
import { Tech } from '../tech';

@Component({
  selector: 'app-techsort',
  templateUrl: './techsort.component.html',
  styleUrls: ['./techsort.component.css']
})

export class TechsortComponent implements OnInit {
  tech: Tech = {
    id: 1,
    name: 'Launch Propulsion Systems';
  }

  constructor() {  }

  ngOnInit() {
  }

}