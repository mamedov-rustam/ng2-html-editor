import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(style: string) : SafeStyle {
    return style ? this.sanitizer.bypassSecurityTrustHtml(style) : '';
  }
}