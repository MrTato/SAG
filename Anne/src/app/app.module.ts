import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent
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
