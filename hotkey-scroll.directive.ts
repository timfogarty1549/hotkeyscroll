import { Directive, Input } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { Table } from 'primeng/table';

@Directive({
  selector: '[appHotkeyScroll]'
})
export class HotkeyScrollDirective {
  @Input('appHotkeyScroll') dt: Table;

  constructor( hotkeysService: HotkeysService) {
    hotkeysService.add(new Hotkey(['end', 'home', 'pageup', 'pagedown'], (event: KeyboardEvent, combo: string): ExtendedKeyboardEvent => {
        this.tableJump( combo );
        const e: ExtendedKeyboardEvent = event;
        e.returnValue = false; // Prevent bubbling
        return e;
    }));
  }

  private tableJump( key ) {
    const el = this.dt.el.nativeElement.getElementsByClassName('ui-table-scrollable-body')[0];
    const viewHeight = Math.floor( el.offsetHeight * 0.8);
    switch (key) {
      case 'home':
        el.scrollTop = 0;
        break;
      case 'end':
        el.scrollTop = el.scrollHeight;
        break;
      case 'pageup':
        el.scrollTop = Math.max(0, el.scrollTop - viewHeight);
        break;
      case 'pagedown':
        el.scrollTop = Math.min(el.scrollHeight - viewHeight, el.scrollTop + viewHeight);
        break;
    }
  }
}
