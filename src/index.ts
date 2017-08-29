import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HtmlEditorComponent } from './html.editor.component';
import { SafeHtmlPipe } from './safe.html.pipe';

export * from './html.editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    HtmlEditorComponent,
    SafeHtmlPipe
  ],
  exports: [
    HtmlEditorComponent
  ]
})
export class HtmlEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HtmlEditorModule
    };
  }
}
