import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mooni';
  typesOfShoes: string[] = [
    'File 1', 'File 2', 'File 3', 'File 4', 'File 5'
  ];
  isLinear = false;
  constructor() {}

  ngOnInit() {
  }
}
