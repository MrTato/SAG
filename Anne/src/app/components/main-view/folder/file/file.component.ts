import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

}
