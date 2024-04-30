import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigationlinkEvent = new EventEmitter<string>();

  navigationLinkHandle(link: string) {
    console.log(link)
    this.navigationlinkEvent.emit(link)
  }
}


