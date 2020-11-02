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

    constructor(value: Partial<ICmnsCargo>) {
        super(value);
        this.cargCodigo = value?.cargCodigo ?? null;
        this.cargNome = value?.cargNome ?? null;
    }
}

