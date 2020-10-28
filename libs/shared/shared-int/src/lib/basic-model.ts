import { LocalDateTime } from '@js-joda/core';
import { BasicInterface } from './basic.interface';
import { v4 as uuidv4 } from 'uuid';

export class BasicModel implements BasicInterface {
    public id?: string;
    public audtDtCreate: LocalDateTime;
    public audtDtUpdate?: LocalDateTime;
    public audtUsrsCreate: string;
    public audtUsrsUpdate?: string;
    public audtActive: boolean;

    constructor(param?: Partial<BasicInterface>) {
        this.id = param?.id ?? uuidv4();
        this.audtDtCreate = param?.audtDtCreate ?? LocalDateTime.now();
        this.audtDtUpdate = param?.audtDtUpdate ?? null;
        this.audtUsrsCreate = param?.audtUsrsCreate ?? 'A3474756-0F30-4307-8824-9AB9E64F964B';
        this.audtUsrsUpdate = param?.audtUsrsUpdate ?? null;
        this.audtActive = param?.audtActive ?? null;
    }
}

