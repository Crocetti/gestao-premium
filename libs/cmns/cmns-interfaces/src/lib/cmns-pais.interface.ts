import { LocalDateTime } from '@js-joda/core';
import { ICmnsUnidadeFederativa } from './cmns-unidade-federativa.interface';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsPais {
    paisId?: string;
    paisNome: string;
    paisSigla: string;
    paisNomeAbreviado: string;
    paisCodigo?: string;
    paisCepInicial?: string;
    paisCepFinal?: string;
    paisLastupdate: LocalDateTime;
    cmnsUnidadesFederativas?: ICmnsUnidadeFederativa[];
}

export class CmnsPaisDto implements ICmnsPais {
    @prop()
    public paisId?: string;
    @required({message: 'O nome do  País é obrigatório'})
    public paisNome: string;
    @required({message: 'A sigla do  País é obrigatório'})
    public paisSigla: string;
    @required({message: 'A nome abreviado do  País é obrigatório'})
    public paisNomeAbreviado: string;
    @prop()
    public paisCodigo?: string;
    @prop()
    public paisCepInicial?: string;
    @prop()
    public paisCepFinal?: string;
    @required()
    public paisLastupdate: LocalDateTime;
    @prop()
    public cmnsUnidadesFederativas?: ICmnsUnidadeFederativa[];

    constructor(init?: Partial<ICmnsPais>) {
        Object.assign(this, init);
    }
}
