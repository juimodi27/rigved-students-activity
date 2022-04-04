import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  username: string = "Jui";
  birthday: Date = new Date(1999, 6, 2);
  amount: number = 52000;

  constructor() { }

  ngOnInit(): void {
  }

}
