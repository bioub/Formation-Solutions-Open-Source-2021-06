import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-multistate-button',
  templateUrl: './ex-multistate-button.component.html',
  styleUrls: ['./ex-multistate-button.component.scss'],
})
export class ExMultistateButtonComponent implements OnInit {
  @Input() values: string[] = [];
  index = 0;

  constructor() {}

  ngOnInit(): void {
    if (!this.values.length) {
      throw new Error('[values] is empty');
    }
  }

  nextValue() {
    this.index = (this.index + 1) % this.values.length;
  }
}
