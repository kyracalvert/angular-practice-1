import { Component, OnInit, Input} from '@angular/core';
import {} from '../person/person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
// greeting component has an input of type 'person'
@Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
