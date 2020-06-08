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

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements AfterViewInit {

  folder: FolderComponent = new FolderComponent();
  originFolder: FolderComponent = this.folder;
  newFolderData: FolderData = {
    title: '',
    description: ''
  };

  constructor() {}

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
    folder.folderData = this.newFolderData;
    folder.parentFolder = this.originFolder;
    this.folder.childFolders.push(folder);
    this.newFolderData ={
      title: '',
      description: ''
    }
    console.log('FolderCreation');
  }

  exploreFolder(folder: FolderComponent) {
    if (this.originFolder == this.folder) {
      this.folder = folder;
    } else {
      this.originFolder.parentFolder = this.originFolder;
      this.originFolder = this.folder;
      this.folder = folder;
    }
  }

  goBackToParent() {
    if(this.folder == this.originFolder) {
      console.log('Already on the parent directory');
    } else  if (this.originFolder.parentFolder == null) {
      this.folder = this.originFolder;
    } else {
      this.folder = this.folder.parentFolder;
      this.originFolder = this.originFolder.parentFolder;
    }
  }

  deleteFolder(index: number) {
    this.folder.childFolders.splice(index, 1);
  }
}
