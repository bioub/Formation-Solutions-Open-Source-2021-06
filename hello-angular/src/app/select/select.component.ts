import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() values: string[] = []
  @Input() selected = '';

  @Output() selectedChange = new EventEmitter<string>();

  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: string) {
    this.selectedChange.emit(value);
    this.open = false;
  }

}
