# ng2-html-editor

## Installation

To install this library, run:

```bash
$ npm install && npm run build
```

## Consuming your library

Run from ng2-html-editor/dist directory 

```bash
$ sudo npm link
```
Run from your project directory 

```bash
$ npm link html-editor
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { HtmlEditorModule } from 'html-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    HtmlEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
