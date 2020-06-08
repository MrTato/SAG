import { FolderComponent } from './../../components/main-view/folder/folder.component';
import { Injectable, Output } from '@angular/core';
import { FileComponent } from 'src/app/components/main-view/folder/file/file.component';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  folder: FolderComponent;
  file: FileComponent;

  createFile(model: {
    editorData: string,
    fileName: string,
  }) {
    this.file.model = model;
    this.folder.files.push(this.file);
  }

  constructor() { }


}
