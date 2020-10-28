import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { LocalDateTime } from '@js-joda/core';
import { prop } from '@rxweb/reactive-form-validators';
import { ICmnsOrgaoExpedidor } from './cmns-orgao-expedidor.interface';
import { ICmnsPessoa } from './cmns-pessoa.interface';
import { ICmnsTipoDocumento } from './cmns-tipo-documento.interface';

export interface ICmnsPessoaDocumento extends BasicInterface {
    cmnsPessoa: ICmnsPessoa;
    psdcNrDocumento: string;
    psdcDtEmissao: LocalDateTime;
    cmnsOrgaoExpedidor: ICmnsOrgaoExpedidor;
    cmnsTipoDocumento: ICmnsTipoDocumento;
}

export class CmnsPessoaDocumentoDto extends BasicModel implements ICmnsPessoaDocumento {
    @prop()
    public cmnsPessoa: ICmnsPessoa;
    @prop()
    public psdcNrDocumento: string;
    @prop()
    public psdcDtEmissao: LocalDateTime;
    @prop()
    public cmnsOrgaoExpedidor: ICmnsOrgaoExpedidor;
    @prop()
    public cmnsTipoDocumento: ICmnsTipoDocumento;

    constructor(param?: Partial<ICmnsPessoaDocumento>) {
        super(param);
        this.cmnsPessoa = param?.cmnsPessoa ?? null;
        this.psdcNrDocumento = param?.psdcNrDocumento ?? null;
        this.psdcDtEmissao = param?.psdcDtEmissao ?? null;
        this.cmnsOrgaoExpedidor = param?.cmnsOrgaoExpedidor ?? null;
        this.cmnsTipoDocumento = param?.cmnsTipoDocumento ?? null;
    }

}
