import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import type { ICmnsBairro } from './cmns-bairro.interface';

export interface ICmnsLogradouro extends BasicInterface {
    lgrdCodigo: string;
    lgrdNome: string;
    lgrdNomeAbrev?: string;
    lgrdCep: string;
    lgrdZona?: string;
    cmnsBairro: ICmnsBairro;
}

export class CmnsLogradouroDto extends BasicModel implements ICmnsLogradouro {
    @required({message: 'O código do Logradouro é obrigatório'})
    public lgrdCodigo: string;
    @required({message: 'O Nome do Logradouro é obrigatório'})
    public lgrdNome: string;
    @prop()
    public lgrdNomeAbrev?: string;
    @prop()
    public lgrdCep: string;
    @prop()
    public lgrdZona?: string;
    @required({message: 'Bairro é obrigatório'})
    public cmnsBairro: ICmnsBairro;

    constructor(value?: Partial<ICmnsLogradouro>) {
        super(value);
        this.lgrdNome = value?.lgrdNome ?? null;
        this.lgrdNomeAbrev = value?.lgrdNomeAbrev ?? null;
        this.lgrdCep = value?.lgrdCep ?? null;
        this.lgrdZona = value?.lgrdZona ?? null;
        this.cmnsBairro = value?.cmnsBairro ?? null;
    }
}
