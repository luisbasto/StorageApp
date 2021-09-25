import { Component } from '@angular/core';
import { get, set } from '../services/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  storageValue : string;

  constructor() {}

  async componentDidLoad() {
    this.storageValue = await get('myKey');
    console.log(this.storageValue);
  }

  changeValue(value) {
    this.storageValue = value;
    set('myKey', this.storageValue);
    console.log(this.storageValue);
  }


}
