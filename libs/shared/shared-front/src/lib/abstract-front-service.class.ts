import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAll } from '@gpremium/shared-all';
import { IConfigBack } from '@gpremium/shared-int';
import { Observable, Subscription } from 'rxjs';
import { UtilsFrontService } from './utils-front.service';

export abstract class AbstractFrontService<I> extends BasicAll {

    public urlBack: string;
    public headers: HttpHeaders;

    public pathApp: string;
    public pathApi: string;
    public configuration: IConfigBack;
    private pathApi$: Subscription;
    private pathApp$: Subscription;
    private configuration$: Subscription;

    constructor(
        private readonly http: HttpClient,
        private readonly utilsService: UtilsFrontService,
    ){
        super();
        this.configuration$ = this.utilsService.$configuration.subscribe(
            (value) => {this.configuration = value;},
        );
        this.pathApi$ = this.utilsService.$pathApi.subscribe(
            (value) => {this.pathApi = value;}
        );
        this.pathApp$ = this.utilsService.$pathApp.subscribe(
            (value) => {this.pathApp = value;}
        )
    }

    public initConfig() {

    }

    public initHeaders(): void {
        this.headers = new HttpHeaders();
        let token: string;
        this.headers = this.headers
            .set(
                'Accept',
                `application/json,
                text/plain,
                application/pdf,
                application/xml,
                application/x-www-form-urlencoded`
            )
            .set(
                'Access-Control-Request-Methods',
                'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            )
            .set('Content-Type', 'application/json')
            .set('X-Api-Key', `${token}`);
    }

    public getUrl(path: string): string{
        return this.pathApi.concat(this.urlBack, path)
    }

    public find(id: string): Observable<T> {
        return this.http.get<T>(
            this.getUrl(`/find/${id}`),
            {
                headers: this.headers,
                observe: "body",
                responseType: 'json',
                withCredentials: true
            }
        )
    }

}
