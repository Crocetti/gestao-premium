
export interface IQueryParams {
    page: number;
    pagesize: number;
    filters?: Array<any>;
    orders?: Array<any>;

}

export class QueryParams implements IQueryParams {
    public page: number;
    public pagesize: number;
    public filters?: Array<any>;
    public orders?: Array<any>;

    constructor(param?: Partial<IQueryParams>) {
        this.page = param?.page ?? 0;
        this.pagesize = param?.pagesize ?? 15;
        this.filters = param?.filters ?? new Array<any>();
        this.orders = param?.orders ?? new Array<any>();
    }

}
