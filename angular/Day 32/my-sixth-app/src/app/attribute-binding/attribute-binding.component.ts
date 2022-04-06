import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colspanValue = 2;
  rowspanValue = 2;
}
