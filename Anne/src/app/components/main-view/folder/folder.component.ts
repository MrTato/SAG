import { TextEditorService } from './../../../services/text-editor/text-editor.service';
import { FileComponent } from './file/file.component';
import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FolderData } from 'src/app/interfaces/folder-data';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit, AfterViewInit {
  @Input() parentFolder: FolderComponent;
  @Input() childFolders: FolderComponent[] = [];
  @Input() folderData: FolderData;
  @Input() index: number;
  @Input() files: FileComponent[] = [];
  @Output() explorationRequest: EventEmitter<FolderComponent> = new EventEmitter();
  @Output() deletionRequest: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  exploreContent() {
    console.log("Exploring content");
    this.explorationRequest.emit(this);
  }

  deleteFolder() {
    console.log("Deleting content");
    this.deletionRequest.emit(this.index);
  }
}
