import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsPessoa } from './cmns-pessoa.interface';

export interface ICmnsPessoaImagem extends BasicInterface {
    psimTipo: string;
    psimImagem: string;
    cmnsPessoa: ICmnsPessoa;
}

export class CmnsPessoaImagemDto extends BasicModel implements ICmnsPessoaImagem {
    @prop()
    public psimTipo: string;
    @prop()
    public psimImagem: string;
    @prop()
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICmnsPessoaImagem>) {
        super(param);
        Object.assign(this, param);
    }
}
