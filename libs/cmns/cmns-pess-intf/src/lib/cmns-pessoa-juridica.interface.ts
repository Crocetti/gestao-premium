import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsPessoa } from './cmns-pessoa.interface';
import { ICmnsRamoAtividade } from './cmns-ramo-atividade.interface';

export interface ICmnsPessoaJuridica extends BasicInterface {
    psjrRazaoSocial: string;
    psjrInscEstadual: string;
    psjrInscEstadualSubt: string;
    psjrInscMunicipal: string;
    cmnsPessoa: ICmnsPessoa;
    cmnsRamoAtividade: ICmnsRamoAtividade;
}

export class CmnsPessoaJuridicaDto extends BasicModel implements ICmnsPessoaJuridica {
    @prop()
    public psjrRazaoSocial: string;
    @prop()
    public psjrInscEstadual: string;
    @prop()
    public psjrInscEstadualSubt: string;
    @prop()
    public psjrInscMunicipal: string;
    @prop()
    public cmnsPessoa: ICmnsPessoa;
    @prop()
    public cmnsRamoAtividade: ICmnsRamoAtividade;

    constructor(param?: Partial<ICmnsPessoaJuridica>) {
        super(param);
        Object.assign(this, param);
    }
}
