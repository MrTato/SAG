import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'textEditor', component: TextEditorComponent },
  { path: '', component: MainViewComponent, children: [
    { path: ':folder', component: MainViewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
