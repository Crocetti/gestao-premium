import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsTipoEmail extends BasicInterface {
    tpemCodigo: string;
    tpemNome: string;
}

export class CmnsTipoEmailDto extends BasicModel implements ICmnsTipoEmail {
    @prop()
    @required({message: 'O Código do Tipo de e-mail é obrigatório!'})
    public tpemCodigo: string;
    @required({message: 'O Nome do Tipo de e-mail é obrigatório!'})
    public tpemNome: string;

    constructor(param?: Partial<ICmnsTipoEmail>) {
        super(param);
        this.tpemCodigo = param?.tpemCodigo ?? null;
        this.tpemNome = param?.tpemNome ?? null;
    }
}
