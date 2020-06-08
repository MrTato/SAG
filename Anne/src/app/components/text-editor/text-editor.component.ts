import { TextEditorService } from './../../services/text-editor/text-editor.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  public model = {
    editorData: '',
    fileName: '',
  };
  @Output() valueChange = new EventEmitter();

  constructor(private textEditorService: TextEditorService) {}

  ngOnInit(): void {}

  onSave() {
    this.textEditorService.createFile(this.model);
  }
}
