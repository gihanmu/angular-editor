import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  extractors = ['KeepEverythingExtractor', 'ArticleExtractor', 'LargestContentExtractor', 'DefaultExtractor'
  ];
  outputFormats = ['HTML', 'HTML Fragment', 'Text', 'JSON']

  value = '';
  displayEditor = false;

  constructor(private formBuilder: FormBuilder) {}

  valueChange(e) {
    this.value = e;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      url: ['', [Validators.required]],
      extractor: ['', Validators.required],
      outputFormat: ['', Validators.required],
    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

         // //Replace this setTimeout with your REST API GET call and set this.value with the response
        setTimeout(() => {
          this.value = 'Hello Sujiya';
          this.displayEditor = true;
        }, 0);
    }

    
}
