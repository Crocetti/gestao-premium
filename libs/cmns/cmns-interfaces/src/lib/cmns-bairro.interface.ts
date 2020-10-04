import { LocalDateTime } from '@js-joda/core';

export interface ICmnsBairro {
    bairId: string;
    bairLcldId: string;
    bairNome: string;
    bairNomeAbreviado: string;
    bairCepInicial: string;
    bairCepFinal: string;
    bairLastupdate: LocalDateTime;
    cmnsLocalidade: ICmnsLocalidade;
}

export class CmnsBairro {
    @prop
    public bairId: string;
    public bairLcldId: string | null;
    public bairNome: string | null;
    public bairNomeAbreviado: string | null;
    public bairCepInicial: string | null;
    public bairCepFinal: string | null;
    public bairLastupdate: LocalDateTime | null;
    public cmnsLocalidade: ICmnsLocalidade;
}
