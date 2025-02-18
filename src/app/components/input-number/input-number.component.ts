import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  imports: [FormsModule, NgIf, NgClass],
  styleUrls: ['./input-number.component.scss'],
  providers: [CookieService]
})
export class InputNumberComponent implements OnInit {
  isInput: boolean = true;
  number?: number;
  selectedNumber?: number;

  constructor(private cookieService: CookieService) {
    const value = this.cookieService.get('selectedNumber');
    this.selectedNumber = value ? +value : undefined; 
  }

  InputEvent() {
    this.isInput = false;
  }

  SaveEvent() {
    this.isInput = true;
    if (this.number !== undefined) {
      this.selectedNumber = this.number;
      this.cookieService.set('selectedNumber', this.selectedNumber.toString(), { path: '/', expires: 365 });
      this.number = undefined;
    }
  }

  ChangeEvent() {
    this.isInput = false;
    if (this.selectedNumber !== undefined) {
      this.cookieService.set('selectedNumber', this.selectedNumber.toString(), { path: '/', expires: 365 });
    }
  }

  ngOnInit() {}
}
