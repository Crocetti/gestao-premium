import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import { ICmnsBairro } from './cmns-bairro.interface';
import { ICmnsUnidadeFederativa } from './cmns-unidade-federativa.interface';

export interface ICmnsLocalidade extends BasicInterface {
    lcldNome: string;
    lcldCep: string;
    lcldNrIbge?: string;
    lcldNomeAbrev?: string;
    lcldCepInicial?: string;
    lcldCepFinal?: string;
    cmnsUnfd: ICmnsUnidadeFederativa;
    cmnsBairros?: ICmnsBairro[]
}

export class CmnsLocalidadeDto extends BasicModel implements ICmnsLocalidade {
    @required({message: 'O nome da Localidade é obrigatório!'})
    public lcldNome: string;
    @required({message: 'O cep da Localidade é obrigatório!'})
    public lcldCep: string;
    @prop()
    public lcldNrIbge?: string;
    @prop()
    public lcldNomeAbrev?: string;
    @prop()
    public lcldCepInicial?: string;
    @prop()
    public lcldCepFinal?: string;
    @required()
    public cmnsUnfd: ICmnsUnidadeFederativa;

    public cmnsBairros: ICmnsBairro[];

    constructor(value?: Partial<ICmnsLocalidade>) {
        super(value);
        this.lcldNome = value?.lcldNome ?? null;
        this.lcldCep = value?.lcldCep ?? null;
        this.lcldNrIbge = value?.lcldNrIbge ?? null;
        this.lcldNomeAbrev = value?.lcldNomeAbrev ?? null;
        this.lcldCepInicial = value?.lcldCepInicial ?? null;
        this.lcldCepFinal = value?.lcldCepFinal ?? null;
        this.cmnsUnfd = value?.cmnsUnfd ?? null;
        this.cmnsBairros = value?.cmnsBairros ?? null;
    }
}
