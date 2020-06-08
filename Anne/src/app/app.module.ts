import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { FolderComponent } from './components/main-view/folder/folder.component';
import { FileComponent } from './components/main-view/folder/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    MainViewComponent,
    FolderComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
