import { TextEditorService } from './../../services/text-editor/text-editor.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import * as M from 'materialize-css';
import { FolderComponent } from './folder/folder.component';
import { FolderData } from 'src/app/interfaces/folder-data';
import { FileComponent } from './folder/file/file.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements AfterViewInit {

  constructor(public textEditorService: TextEditorService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, Option);
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, Option);
    }, 0);
  }

  createFolder() {
    let folder = new FolderComponent();
    folder.folderData = this.textEditorService.newFolderData;
    folder.parentFolder = this.textEditorService.originFolder;
    this.textEditorService.folder.childFolders.push(folder);
    this.textEditorService.newFolderData ={
      title: '',
      description: ''
    }
    console.log('FolderCreation');
  }

  exploreFolder(folder: FolderComponent) {
    if (this.textEditorService.originFolder == this.textEditorService.folder) {
      this.textEditorService.folder = folder;
    } else {
      this.textEditorService.originFolder.parentFolder = this.textEditorService.originFolder;
      this.textEditorService.originFolder = this.textEditorService.folder;
      this.textEditorService.folder = folder;
    }
  }

  goBackToParent() {
    if(this.textEditorService.folder == this.textEditorService.originFolder) {
      console.log('Already on the parent directory');
    } else  if (this.textEditorService.originFolder.parentFolder == null) {
      this.textEditorService.folder = this.textEditorService.originFolder;
    } else {
      this.textEditorService.folder = this.textEditorService.folder.parentFolder;
      this.textEditorService.originFolder = this.textEditorService.originFolder.parentFolder;
    }
  }

  deleteFolder(index: number) {
    this.textEditorService.folder.childFolders.splice(index, 1);
  }

  createNewFile() {
    let file = new FileComponent();
    file.model.fileName = "NEW";
    this.textEditorService.folder.addFile(file);
    console.log("new file creation");
  }
}
