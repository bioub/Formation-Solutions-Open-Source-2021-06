import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-helloworld',
  templateUrl: './ex-helloworld.component.html',
  styleUrls: ['./ex-helloworld.component.scss']
})
export class ExHelloworldComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {
  }

  updateName(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.name = inputEl.value;
  }

}
