import { prop } from '@rxweb/reactive-form-validators';
import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { ICoreEmpresa } from './core-empresa.interface';

export interface ICoreCorporacao extends BasicInterface {
    cprcNome: string;
    cprcSenha: string;
    cprcLogomarca: string;
    coreEmpresas?: ICoreEmpresa[]
}

export class CoreCorporacaoDto extends BasicModel implements ICoreCorporacao {
    @prop()
    public cprcNome: string;
    @prop()
    public cprcSenha: string;
    @prop()
    public cprcLogomarca: string;
    @prop()
    public coreEmpresas?: ICoreEmpresa[];

    constructor(param?: Partial<ICoreCorporacao>) {
        super(param);
        Object.assign(this, param);
    }
}
