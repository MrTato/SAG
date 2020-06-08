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

  folders: FolderComponent[] = [];
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
    this.folders.push(folder);
    this.newFolderData ={
      title: '',
      description: ''
    }
    console.log('FolderCreation');
  }
}