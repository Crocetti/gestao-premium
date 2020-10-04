import { LocalDateTime } from '@js-joda/core';
import { ICmnsBairro } from './cmns-bairro.interface';
import { ICmnsUnidadeFederativa } from './cmns-unidade-federativa.interface';

export interface ICmnsLocalidade {
    lcldId: string;
    lcldUnfdId: string;
    lcldNrIbge: string;
    lcldNome: string;
    lcldCep: string;
    lcldNomeAbrev: string;
    lcldCepInicial: string;
    lcldCepFinal: string;
    lcldLastupdate: LocalDateTime;
    cmnsUnFd: ICmnsUnidadeFederativa;
    cmnsBairros?: ICmnsBairro[];
}

export class CmnsLocalidadeDto implements ICmnsLocalidade {
    public lcldId: string;
    public lcldUnfdId: string;
    public lcldNrIbge: string;
    public lcldNome: string;
    public lcldCep: string;
    public lcldNomeAbrev: string;
    public lcldCepInicial: string;
    public lcldCepFinal: string;
    public lcldLastupdate: LocalDateTime;
    public cmnsUnFd: ICmnsUnidadeFederativa;
    public cmnsBairros?: ICmnsBairro[];
    public constructor(init?: Partial<ICmnsLocalidade>) {
        Object.assign(this, init);
    }
}
