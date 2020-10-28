import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';

export interface ISstmObjetoVersao extends BasicInterface {
    obbnObjtId: string;
    obvsVersion: string;
    obvsChecksum: string;
    obvsBinary: string;
    sstmObjeto: ISstmObjeto;
    sstmSistemaversaoObjetoversaos: ISstmSistemaversaoObjetoversao[];
}

export class SstmObjetoVersaoDto extends BasicModel implements ISstmObjetoVersao {
    @prop()
    public obbnObjtId: string;
    @prop()
    public obvsVersion: string;
    @prop()
    public obvsChecksum: string;
    @prop()
    public obvsBinary: string;
    @prop()
    public sstmObjeto: ISstmObjeto;
    @prop()
    public sstmSistemaversaoObjetoversaos: ISstmSistemaversaoObjetoversao[];

    constructor(param?: ISstmObjetoVersao) {
        super(param);
        Object.assign(this, param)        
    }
}
