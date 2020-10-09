import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'gpremium-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
    public title = 'GPremium';
    public hasMenu: boolean;

    constructor(
        private readonly router: Router,
        private readonly titleSvc: Title,
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.titleSvc.setTitle('GPremium');
        this.hasMenu = true;
    }

}
