import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'main-page-menu',
    templateUrl: './main-page-menu.component.html',
    styleUrls: ['./main-page-menu.component.scss'],
})
export class MainPageMenuComponent implements OnInit {

    public items: MenuItem[] = [
        {label: 'teste1'},
        {label: 'teste2'},
        {label: 'teste3'},
        {label: 'teste4'}
    ];

    constructor() {}

    ngOnInit(): void {}
}
