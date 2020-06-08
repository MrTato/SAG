import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FolderData } from 'src/app/interfaces/folder-data';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit, AfterViewInit {
  @Input() childFolders: FolderComponent[];
  @Input() folderData: FolderData;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let folder = new FolderComponent();
    folder.folderData = {
      title: 'Test',
      description: 'Test'
    }
    this.childFolders = [
      folder
    ];
  }

  exploreContent() {
    console.log("Exploring content");
  }
}
