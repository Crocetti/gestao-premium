import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsTipoDocumento extends BasicInterface {
    tpdcCodigo: string;
    tpdcNome: string;
    tpdcTipo: string;
}

export class CmnsTipoDocumentoDto extends BasicModel implements ICmnsTipoDocumento {
    @prop()
    @required({message: 'O código do tipo de documento é obrigatório!'})
    public tpdcCodigo: string;
    @prop()
    @required({message: 'O nome do tipo de documento é obrigatório!'})
    public tpdcNome: string;
    @prop()
    @required({message: 'O tipo do tipo de documento é obrigatório!'})
    public tpdcTipo: string;

    constructor(param?: Partial<ICmnsTipoDocumento>) {
        super(param);
        this.tpdcCodigo = param?.tpdcCodigo ?? null;
        this.tpdcNome = param?.tpdcNome ?? null;
        this.tpdcTipo = param?.tpdcTipo ?? null;
    }
}
