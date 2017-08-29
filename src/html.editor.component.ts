import { Component } from '@angular/core';

@Component({
  selector: 'html-editor',
  templateUrl: 'html-editor-component.html'
})
export class HtmlEditorComponent {
  htmlInput: string;

  constructor() {
  	this.htmlInput = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>My HTML page</title>
  <style>h1 {color: green}</style>
</head>
<body>
  <h1>Hello world!</h1>
</body>
</html>
  	`
  }

}
