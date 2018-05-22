import { Component, OnInit } from '@angular/core';
import { Tech } from '../tech';
import { TECHSORT } from 
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