import { prop } from '@rxweb/reactive-form-validators';
import { BasicInterface, BasicModel } from '@gpremium/shared-int';

export interface ISstmDatabase extends BasicInterface {
    dtbsNome: string;
    dtbsVersao: string;
    sstmTabelaScripts: ISstmTabelaScript[];
}

export class SstmDatabaseDto extends BasicModel implements ISstmDatabase {
    @prop()
    public dtbsNome: string;
    @prop()
    public dtbsVersao: string;
    @prop()
    public sstmTabelaScripts: ISstmTabelaScript[];

    constructor(param?: ISstmDatabase) {
        super(param);
        Object.assign(this, param);
    }
}
