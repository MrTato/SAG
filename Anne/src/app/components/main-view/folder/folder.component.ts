import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FolderData } from 'src/app/interfaces/folder-data';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  @Input() folderData: FolderData;
  folder: {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.folderData.title);
    console.log(this.folderData.description);
  }
}
