import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // typescript declaration of variable
  greeting: string;
  people = PEOPLE;

  constructor() {
    
  }

  log(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
