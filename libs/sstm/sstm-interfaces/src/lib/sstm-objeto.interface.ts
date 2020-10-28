import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { ISstmObjetoVersao } from './sstm-objeto-versao.interface';

export class ISstmObjeto extends BasicInterface {
    objtName: string;
    objtFile: string;
    objtPath: string;
    objtType: string;
    sstmObjetoVersaos: ISstmObjetoVersao[];
}

export class SstmObjeto extends BasicModel implements ISstmObjeto {
    public objtName: string;
    public objtFile: string;
    public objtPath: string;
    public objtType: string;
    public sstmObjetoVersaos: ISstmObjetoVersao[];

    constructor(param?: Partial<ISstmObjeto>) {
        superuper(param);
        Object.assign(this, param);
    }
}
