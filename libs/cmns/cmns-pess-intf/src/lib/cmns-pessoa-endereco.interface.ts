import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';
import type { ICmnsBairro } from './cmns-bairro.interface';
import { ICmnsPessoa } from './cmns-pessoa.interface';
import { ICmnsTipoEndereco } from './cmns-tipo-endereco.interface';

export interface ICmnsPessoaEndereco extends BasicInterface {
    psenCep: string;
    psenLogradouro: string;
    psenNumero: string;
    psenComplemento: string;
    psenDistanciaKm: number;
    psenZona: string;
    cmnsTipoEndereco: ICmnsTipoEndereco;
    cmnsBairro: ICmnsBairro;
    cmnsPessoa: ICmnsPessoa;
}

export class CmnsPessoaEnderecoDto extends BasicModel implements ICmnsPessoaEndereco {
    @prop()
    public psenCep: string;
    @prop()
    public psenLogradouro: string;
    @prop()
    public psenNumero: string;
    @prop()
    public psenComplemento: string;
    @prop()
    public psenDistanciaKm: number;
    @prop()
    public psenZona: string;
    @prop()
    public cmnsTipoEndereco: ICmnsTipoEndereco;
    @prop()
    public cmnsBairro: ICmnsBairro;
    @prop()
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICmnsPessoaEndereco>) {
        super(param);
        Object.assign(this, param);
    }
}
