import { LocalDateTime } from '@js-joda/core';
export interface ICmnsPais {
    paisId?: string;
    paisNome: string;
    paisSigla: string;
    paisNomeAbreviado: string;
    paisCodigo?: string;
    paisCepInicial?: string;
    paisCepFinal?: string;
    paisLastupdate: LocalDateTime;
}

export class CmnsPaisDto implements ICmnsPais {
    public paisId?: string;
    public paisNome: string;
    public paisSigla: string;
    public paisNomeAbreviado: string;
    public paisCodigo?: string;
    public paisCepInicial?: string;
    public paisCepFinal?: string;
    public paisLastupdate: LocalDateTime;

    constructor(init?: Partial<ICmnsPais>) {
        Object.assign(this, init);
    }
}
