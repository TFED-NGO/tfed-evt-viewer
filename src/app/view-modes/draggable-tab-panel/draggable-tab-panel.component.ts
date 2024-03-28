import { Component } from '@angular/core';

@Component({
    selector: 'evt-custom-tabs',
    templateUrl: './draggable-tab-panel.component.html',
    styleUrls: ['./draggable-tab-panel.component.scss']
})
export class CustomTabsComponent {

    tabs = [];
    tab_counter = 0;

    constructor() {
    }
} 