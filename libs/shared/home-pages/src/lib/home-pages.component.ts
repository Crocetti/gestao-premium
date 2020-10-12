import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <p>{{"It's work "}}</p>
        <router-outlet></router-outlet>
    `,
    styles: [],
})
export class HomePagesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
