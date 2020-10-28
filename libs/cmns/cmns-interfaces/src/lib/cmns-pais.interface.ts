import { BasicModel, BasicInterface } from '@gpremium/shared-int';
import { ICmnsUnidadeFederativa } from './cmns-unidade-federativa.interface';
import { prop, required } from '@rxweb/reactive-form-validators';
export interface ICmnsPais extends  BasicInterface {
    paisNome: string;
    paisSigla: string;
    paisNomeAbreviado?: string;
    paisCodigo?: string;
    paisCepInicial?: string;
    paisCepFinal?: string;
    cmnsUnidadeFederativas?: ICmnsUnidadeFederativa[];
}

export class CmnsPaisDto extends BasicModel implements ICmnsPais {
    @prop()
    @required({message: 'Nome do País é obrigatório!'})
    public paisNome: string;
    @prop()
    @required({message: 'Sigla do País é obrigatório!'})
    public paisSigla: string;
    @prop()
    public paisNomeAbreviado?: string;
    @prop()
    public paisCodigo?: string;
    @prop()
    public paisCepInicial?: string;
    @prop()
    public paisCepFinal?: string;

    public cmnsUnidadeFederativas?: ICmnsUnidadeFederativa[];

    constructor(value?: Partial<ICmnsPais>) {
        super(value)
        this.paisNome = value?.paisNome ?? null;
        this.paisSigla = value?.paisSigla ?? null;
        this.paisNomeAbreviado = value?.paisNomeAbreviado ?? null;
        this.paisCodigo = value?.paisCodigo ?? null;
        this.paisCepInicial = value?.paisCepInicial ?? null;
        this.paisCepFinal = value?.paisCepFinal ?? null;
        this.cmnsUnidadeFederativas = value?.cmnsUnidadeFederativas ?? null;
    }
}

