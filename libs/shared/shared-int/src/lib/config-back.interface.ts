export interface HttpConfig{
    protocol: string;
    host: string;
    port: string;
}

export interface IConfigBack {
    apiGMKey: string;
    app: HttpConfig;
    api: HttpConfig;
}

export class ConfigBack implements IConfigBack {
    public apiGMKey: string;
    public app: HttpConfig;
    public api: HttpConfig;
}
