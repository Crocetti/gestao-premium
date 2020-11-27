import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { required } from '@rxweb/reactive-form-validators';

export interface ICmnsNacionalidade extends BasicInterface {
    ncnlCodigo: string;
    ncnlNome: string;
}

export class CmnsNacionalidadeDto extends BasicModel implements ICmnsNacionalidade {
    @required({message: 'O código da Nacionalidade é obrigatório!'})
    public ncnlCodigo: string;
    @required({message: 'O nome da Nacionalidade é obrigatório!'})
    public ncnlNome: string;

    constructor(value?: ICmnsNacionalidade) {
        super(value)
        this.ncnlCodigo = value?.ncnlCodigo ?? null;
        this.ncnlNome = value?.ncnlNome ?? null;
    }

    public patchValues(values: Partial<ICmnsNacionalidade>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}


