import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { IConfigBack } from "@gpremium/shared-int";
import { ConfigBack } from "@gpremium/shared-int";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtilsFrontService {
    private _configuration: IConfigBack = new ConfigBack();
    private configuration$ = new BehaviorSubject<IConfigBack>(null);
    public  $configuration = this.configuration$.asObservable();

    private _pathApp: string;
    private _pathApi: string;
    private pathApp$ = new BehaviorSubject<string>('');
    private pathApI$ = new BehaviorSubject<string>('');

    public $pathApp = this.pathApp$.asObservable();
    public $pathApi = this.pathApI$.asObservable();

    constructor(
        private readonly http: HttpClient,
    ) {
        this.loadConfiguration();
    }

    public loadConfiguration() {
        this.http.get('assets/config/config.json')
        .toPromise()
        .then(
            (value: IConfigBack) => {
                this._configuration = value;
                this._pathApi = this._configuration.api.protocol
                .concat(this._configuration.api.host, ':', this._configuration.api.port);
                this._pathApp = this._configuration.app.protocol
                .concat(this._configuration.app.host, ':', this._configuration.app.port);
                this.configuration$.next(this._configuration);
                this.pathApI$.next(this._pathApi);
                this.pathApp$.next(this._pathApp);
            }
        );
    }




}
