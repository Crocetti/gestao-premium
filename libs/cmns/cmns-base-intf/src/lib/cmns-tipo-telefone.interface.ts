import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { required } from '@rxweb/reactive-form-validators';

export interface ICmnsTipoTelefone extends BasicInterface {
    tptlCodigo: string;
    tptlNome: string;
}

export class CmnsTipoTelefoneDto extends BasicModel
    implements ICmnsTipoTelefone {
    @required({message: 'O código do tipo de teelefone é obrigatório!'})
    public tptlCodigo: string;
    @required({message: 'O nome do tipo de teelefone é obrigatório!'})
    public tptlNome: string;

    constructor(param?: Partial<ICmnsTipoTelefone>) {
        super(param);
        this.tptlCodigo = param?.tptlCodigo ?? null;
        this.tptlNome = param?.tptlNome ?? null;
    }

    public patchValues(values: Partial<ICmnsTipoTelefone>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}
