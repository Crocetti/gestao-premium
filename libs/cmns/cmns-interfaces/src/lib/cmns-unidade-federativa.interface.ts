import { LocalDateTime } from '@js-joda/core';
import { prop, required } from '@rxweb/reactive-form-validators';
import { ICmnsLocalidade } from './cmns-localidade.interface';
import { ICmnsPais } from './cmns-pais.interface';

export interface ICmnsUnidadeFederativa {
    unfdId: string;
    unfdNome: string;
    unfdSigla: string;
    unfdPreposicao?: string;
    unfdNrIbge?: string;
    unfdCepInicial?: string;
    unfdCepFinal?: string;
    unfdLastupdate: LocalDateTime;
    cmnsPais: ICmnsPais;
    cmnsLocalidades?: ICmnsLocalidade[];
}

export class CmnsUnidadeFederativaDto implements ICmnsUnidadeFederativa {
    @prop()
    public unfdId: string;
    @required({message: 'O nome  da Unidade Federativa é obrigatório'})
    public unfdNome: string;
    @required({message: 'A sigla da Unidade Federativa é obrigatório'})
    public unfdSigla: string;
    @prop()
    public unfdPreposicao?: string;
    @prop()
    public unfdNrIbge?: string;
    @prop()
    public unfdCepInicial?: string;
    @prop()
    public unfdCepFinal?: string;
    @prop()
    public unfdLastupdate: LocalDateTime | null;
    @required({message: 'O País para a Unidade Federativa é obrigatório'})
    public cmnsPais: ICmnsPais;
    @prop()
    public cmnsLocalidades?: ICmnsLocalidade[];

    constructor(init?:  Partial<ICmnsUnidadeFederativa>) {
        Object.assign(this, init)
    }
}
