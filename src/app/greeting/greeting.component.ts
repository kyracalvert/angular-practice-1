import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  names: string[] = ['Kyra', 'Mud', 'Kierra', 'Owen', 'Maggie'];

  constructor() { }

  ngOnInit() {
  }

}
