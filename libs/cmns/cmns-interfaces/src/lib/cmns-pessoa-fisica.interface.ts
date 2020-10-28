import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { LocalDateTime } from '@js-joda/core';
import { prop } from '@rxweb/reactive-form-validators';
import type { ICmnsCargo } from './cmns-cargo.interface';
import type { ICmnsNacionalidade } from './cmns-nacionalidade.interface';
import type { ICmnsPessoa } from './cmns-pessoa.interface';
import type { ICmnsProfissao } from './cmns-profissao.interface';

export interface ICmnsPessoaFisica extends BasicInterface {
    psfsNomeMae: string;
    psfsNomePai: string;
    psfsDtNascimento: LocalDateTime;
    psfsSexo: string;
    psfsEstadoCivil: string;
    psfsEscolaridade: string;
    cmnsNacionalidade: ICmnsNacionalidade;
    cmnsCargo: ICmnsCargo;
    cmnsProfissao: ICmnsProfissao;
    cmnsPessoa: ICmnsPessoa;
}

export class CmnsPessoaFisicaDto extends BasicModel implements ICmnsPessoaFisica {
    @prop()
    public psfsNomeMae: string;
    @prop()
    public psfsNomePai: string;
    @prop()
    public psfsDtNascimento: LocalDateTime;
    @prop()
    public psfsSexo: string;
    @prop()
    public psfsEstadoCivil: string;
    @prop()
    public psfsEscolaridade: string;
    @prop()
    public cmnsNacionalidade: ICmnsNacionalidade;
    @prop()
    public cmnsCargo: ICmnsCargo;
    @prop()
    public cmnsProfissao: ICmnsProfissao;
    @prop()
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICmnsPessoaFisica>) {
        super(param);
        Object.assign(this, param);
    }
}
