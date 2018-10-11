# Programmatically Scroll through Primeng Turbo Table in Angular

## Dependencies

https://github.com/brtnshrdr/angular2-hotkeys

https://www.primefaces.org/primeng/#/setup

## Installation

Copy hotkey-scroll.directive.ts to your project.  Import and export HotkeyScrollDirective into a shared module.

## Example

```html
<div [appHotkeyScroll]="dt">

  <p-table #dt 
    [scrollable]="true"
    scrollHeight="calc(100vh - 100px)"
    ...
    >
      ...
  </p-table>

</div>
```

## User Interaction

The div containing the PrimeNg table will need to have focus.  Then pressing the Home, End, Page Up and Page Down keys will adjust the scroll position accordingly.  Tested on a Mac with an extended keyboard.
