import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'page-main-menu',
    templateUrl: './page-main-menu.component.html',
    styleUrls: ['./page-main-menu.component.scss'],
})
export class PageMainMenuComponent implements OnInit {
    public items: MenuItem[] = [
        {label: 'teste1'},
        {label: 'teste2'},
        {label: 'teste3'},
        {label: 'teste4'}
    ];
    constructor() {}

    ngOnInit(): void {}
}
