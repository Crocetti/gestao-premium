import { LocalDateTime } from '@js-joda/core';

export interface ICmnsTipoTelefone {
    tptlId: string;
    tptlCodigo: string | null;
    tptlNome: string | null;
    tptlLastupdate: LocalDateTime | null;
}

export class CmnsTipoTelefoneDto implements ICmnsTipoTelefone {
    public tptlId: string;
    public tptlCodigo: string | null;
    public tptlNome: string | null;
    public tptlLastupdate: LocalDateTime | null;

    constructor(param?: ICmnsTipoTelefone) {
        this.tptlId = param?.tptlId ?? null;
        this.tptlCodigo = param?.tptlCodigo ?? null;
        this.tptlNome = param?.tptlNome ?? null;
        this.tptlLastupdate = param?.tptlLastupdate ?? null;
    }
}



