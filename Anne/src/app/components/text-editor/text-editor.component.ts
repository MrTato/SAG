import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  public model = {
    editorData: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    alert('The document has been saved');
  }
}
