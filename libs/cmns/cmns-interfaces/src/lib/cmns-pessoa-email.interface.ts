import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsPessoa } from './cmns-pessoa.interface';
import { ICmnsTipoEmail } from './cmns-tipo-email.interface';

export interface ICmnsPessoaEmail extends BasicInterface {
    psemEndereco: string;
    cmnsPessoa: ICmnsPessoa;
    cmnsTipoEmail: ICmnsTipoEmail;
}

export class CmnsPessoaEmailDto extends BasicModel implements ICmnsPessoaEmail {
    @prop()
    public psemEndereco: string;
    @prop()
    public cmnsPessoa: ICmnsPessoa;
    @prop()
    public cmnsTipoEmail: ICmnsTipoEmail;

    constructor(param?: Partial<ICmnsPessoaEmail>) {
        super(param);
        Object.assign(this, param);
    }
}
