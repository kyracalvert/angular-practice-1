import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  // 'names' is now a string of objects
  names: [{name: string}] = [{name: 'Kyra'}, {name: 'Mud'}, {name: 'Kierra'}, {name: 'Owen'}, {name: 'Maggie'}];

  constructor() { }

  ngOnInit() {
  }

}
