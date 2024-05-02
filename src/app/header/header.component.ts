import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() navLinkOutput = new EventEmitter<string>();

  onNavLinkClick(link: string) {
    this.navLinkOutput.emit(link);
  }
}
