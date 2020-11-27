import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { required } from '@rxweb/reactive-form-validators';

export interface ICmnsCargo extends BasicInterface {
    cargCodigo: string;
    cargNome: string;
}

export class CmnsCargoDto extends BasicModel implements ICmnsCargo {
    @required({message: 'O Código do Cargo é obrigatório!'})
    public cargCodigo: string | null;
    @required({message: 'O nome do Cargo é obrigatório!'})
    public cargNome: string | null;

    constructor(values: Partial<ICmnsCargo>) {
        super(values);
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }

    public patchValues(values: Partial<ICmnsCargo>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}

