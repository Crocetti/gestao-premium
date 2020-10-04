import { LocalDateTime } from '@js-joda/core';
import { ICmnsPais } from './cmns-pais.interface';

export interface ICmnsUnidadeFederativa {
    unfdId: string;
    unfdPaisId: string;
    unfdNome: string;
    unfdSigla: string;
    unfdPreposicao?: string;
    unfdNrIbge?: string;
    unfdCepInicial?: string;
    unfdCepFinal?: string;
    unfdLastupdate: LocalDateTime;
    cmnsPais: ICmnsPais;
}

export class CmnsUnidadeFederativaDto implements ICmnsUnidadeFederativa {
    public unfdId: string;
    public unfdPaisId: string;
    public unfdNome: string;
    public unfdSigla: string;
    public unfdPreposicao?: string;
    public unfdNrIbge?: string;
    public unfdCepInicial?: string;
    public unfdCepFinal?: string;
    public unfdLastupdate: LocalDateTime | null;
    public cmnsPais: ICmnsPais;

    constructor(init?:  Partial<ICmnsUnidadeFederativa>) {
        Object.assign(this, init)
    }
}
