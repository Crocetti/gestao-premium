import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import type { ICmnsLogradouro } from './cmns-logradouro.interface';
import type { ICmnsLocalidade } from './cmns-localidade.interface';

export interface ICmnsBairro extends BasicInterface {
    bairCodigo: string;
    bairNome: string;
    bairNomeAbreviado?: string;
    bairCepInicial?: string;
    bairCepFinal?: string;
    cmnsLocalidade: ICmnsLocalidade;
    cmnsLogradouros?: ICmnsLogradouro[];
}

export class CmnsBairroDto extends BasicModel implements ICmnsBairro {
    @required({message: 'O código do Bairro é obrigatório!'})
    public bairCodigo: string;
    @required({message: 'O nome do Bairro é obrigatório!'})
    public bairNome: string;
    @prop()
    public bairNomeAbreviado?: string | null;
    @prop()
    public bairCepInicial?: string | null;
    @prop()
    public bairCepFinal?: string | null;
    @required()
    public cmnsLocalidade: ICmnsLocalidade;

    public cmnsLogradouros?: ICmnsLogradouro[];

    constructor(param?: Partial<ICmnsBairro>) {
        super(param);
        this.bairCodigo = param?.bairCodigo ?? null;
        this.bairNome = param?.bairNome ?? null;
        this.bairNomeAbreviado = param?.bairNomeAbreviado ?? null;
        this.bairCepInicial = param?.bairCepInicial ?? null;
        this.bairCepFinal = param?.bairCepFinal ?? null;
        this.cmnsLocalidade = param?.cmnsLocalidade ?? null;
        this.cmnsLogradouros = param?.cmnsLogradouros ?? null;
    }
}
