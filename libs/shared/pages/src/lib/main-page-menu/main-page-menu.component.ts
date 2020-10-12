import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'main-page-menu',
    templateUrl: './main-page-menu.component.html',
    styleUrls: ['./main-page-menu.component.scss'],
})
export class MainPageMenuComponent implements OnInit {

    public items: MenuItem[] = [
        {label: 'Tamanho ideal de texto', icon: 'pi pi-chart-line', items: [{label: 'Tamanho ideal de texto 1'}, {label: 'Tamanho ideal de texto 2'}]},
        {label: 'teste2'},
        {label: 'teste3'},
        {label: 'teste4'}
    ];
    public menuVisible: boolean = true;
    public altura: number;
    public altContent: number;
    public hscreen: number;
    constructor(
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
    }

    btnMenOnClick() {
        this.menuVisible = !this.menuVisible;
    }

    onHomePage(){
        this.router.navigate(['/home']);
    }
}
