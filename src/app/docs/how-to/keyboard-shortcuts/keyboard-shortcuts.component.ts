import { Component } from '@angular/core';

@Component({
    selector: 'app-keyboard-shortcuts',
    templateUrl: './keyboard-shortcuts.component.html',
    styleUrls: ['./keyboard-shortcuts.component.scss']
})
export class KeyboardShortcutsComponent {
    shortcuts = [
        {
            keys: ['ctrl + p', 'f2'],
            description: 'Toggle command bar open/closed',
        },
        {
            keys: ['esc'],
            description: 'Close command bar',
        },
        {
            keys: ['\u2191', '\u2193'],
            description: 'Navigate up or down in command bar list',
        },
        {
            keys: ['ctrl + \u2191', 'ctrl + \u2193'],
            description: 'Switch scenarios while navigating up or down in command bar list',
        }
    ];
}
