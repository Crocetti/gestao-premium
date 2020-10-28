import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsPessoa } from './cmns-pessoa.interface';
import { ICmnsTipoTelefone } from './cmns-tipo-telefone.interface';

export interface ICmnsPessoaTelefone extends BasicInterface {
    pstlNumero: string;
    pstlRamal: string;
    pstlObservacao: string;
    cmnsTipoTelefone: ICmnsTipoTelefone;
    cmnsPessoa: ICmnsPessoa;
}

export class CmnsPessoaTelefoneDto extends BasicModel implements ICmnsPessoaTelefone {
    @prop()
    public pstlNumero: string;
    @prop()
    public pstlRamal: string;
    @prop()
    public pstlObservacao: string;
    @prop()
    public cmnsTipoTelefone: ICmnsTipoTelefone;
    @prop()
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICmnsPessoaTelefone>) {
        super(param);
        Object.assign(this, param);
    }
}
