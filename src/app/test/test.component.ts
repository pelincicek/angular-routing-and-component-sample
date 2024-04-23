import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  krediTutari: number = 10000;
  taksitTutari: number = 1;
  aylikTaksitTutari: number = 0;

  hesapla() {
    this.aylikTaksitTutari = this.krediTutari / this.taksitTutari;
  }
}
