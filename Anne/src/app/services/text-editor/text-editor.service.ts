import { FolderComponent } from './../../components/main-view/folder/folder.component';
import { Injectable, Output } from '@angular/core';
import { FileComponent } from 'src/app/components/main-view/folder/file/file.component';
import { FolderData } from 'src/app/interfaces/folder-data';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  folder: FolderComponent = new FolderComponent();
  originFolder: FolderComponent = this.folder;
  newFolderData: FolderData = {
    title: '',
    description: ''
  };
  file: FileComponent;

  updateFile(model: {
    editorData: string,
    fileName: string,
  }, index: number) {
    this.file.model = model;
    this.folder.files.push(this.file);
  }

  constructor() { }


}
