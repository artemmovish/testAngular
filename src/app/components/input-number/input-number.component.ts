import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  imports: [FormsModule, NgIf, NgClass],
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {
  isInput: boolean = true;
  number?: number;
  selectedNumber?: number;
  
  constructor() {
    const value = localStorage.getItem("selectedNumber");
    this.selectedNumber = value ? JSON.parse(value) : undefined;
  }

  InputEvent() {
    this.isInput = false;
  }

  SaveEvent() {
    this.isInput = true;
    this.selectedNumber = this.number;
    this.number = undefined;
    localStorage.setItem('selectedNumber', JSON.stringify(this.selectedNumber));
  }

  ChangeEvent() {
    this.isInput = false;
    localStorage.setItem('selectedNumber', JSON.stringify(this.selectedNumber));
  }

  ngOnInit() {}
}
