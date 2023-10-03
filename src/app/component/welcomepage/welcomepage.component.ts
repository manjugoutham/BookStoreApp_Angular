import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  text : any[]=[
    "Hi how are doing ?",
    "Lets start exploring"];
  constructor() { }

  ngOnInit(): void {
  }

}

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
  ]),
]);
