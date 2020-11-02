import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsPessoaEmail } from './cmns-pessoa-email.interface';
import { ICmnsPessoa } from './cmns-pessoa.interface';

export interface ICmnsUsuario extends BasicInterface {
    usrsNomeLogin: string;
    usrsSenha: string;
    cmnsPessoaEmail: ICmnsPessoaEmail;
    cmnsPessoa: ICmnsPessoa;
}

export class CmnsUsuarioDto extends BasicModel implements ICmnsUsuario {
    @prop()
    public usrsNomeLogin: string;
    @prop()
    public usrsSenha: string;
    @prop()
    public cmnsPessoaEmail: ICmnsPessoaEmail;
    @prop()
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICmnsUsuario>) {
        super(param);
        Object.assign(this, param);
    }

}
