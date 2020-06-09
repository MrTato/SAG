import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  @Input() model = {
      editorData: '',
      fileName: '',
    };
  @Input() index;
  @Output() indexValue = new EventEmitter();

  openEditor() {
    this.indexValue.emit(this.index);
  }

  constructor() { }

}
