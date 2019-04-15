import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  constructor() {}

  value = '';

  valueChange(e) {
    this.value = e;
  }

  ngOnInit() {}
}
