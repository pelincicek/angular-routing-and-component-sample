import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //Two Data Binding
  name: string = 'Pelin Çiçek';
  age: number;
  constructor() {
    console.log(this.age);
    console.log(this.name);
  }
  //Event Binding
  metot() {
    alert('Çalıştım');
  }
  //JS Kullanarak HTML Elementlerinin Değerini Yakalama
  getValue() {
    let element: any = document.getElementById('name');
    console.log(element.value);
  }

  //$Event ile Elementlerin Değerini Yakalama
  getValueEvent(event: any) {
    console.log(event);
  }

  //ViewChild Function ile Element Değerini Yakalama
  @ViewChild('name')
  test: ElementRef<HTMLInputElement>;

  getValueViewChild() {
    console.log(this.test.nativeElement.value);
  }

  //ngModel ile Elemente Değer Atama ve Değer Yakalama
  ngModelname: string = 'Pelin ngModel testi';
  getValueNgModel() {
    console.log(this.ngModelname);
  }
}
