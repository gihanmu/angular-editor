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

  ngOnInit() {
    //Replace this setTimeout with your REST API GET call and set this.value with the response
    setTimeout(() => {
      this.value = 'Hello Sujiya';
    }, 0);
  }

  submit(){
    //in this method you will call your POST method in REST API with this.value
    console.log(this.value);
  }
}
