import { BasicModel, BasicInterface } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import { ICmnsLocalidade } from './cmns-localidade.interface';
import { ICmnsPais } from './cmns-pais.interface';

export interface ICmnsUnidadeFederativa extends BasicInterface {
    unfdCodigo: string;
    unfdNome: string;
    unfdSigla: string;
    unfdPreposicao?: string;
    unfdNrIbge?: string;
    unfdCepInicial?: string;
    unfdCepFinal?: string;
    cmnsPais: ICmnsPais;

    cmnsLocalidades?: ICmnsLocalidade[];
}

export class CmnsUnidadeFederativaDto extends BasicModel implements ICmnsUnidadeFederativa {
    @required({message: 'Código da Unidade Federativa é obrigatório!'})
    public unfdCodigo: string;
    @required({message: 'Nome da Unidade Federativa é obrigatório!'})
    public unfdNome: string;
    @required({message: 'Sigla da Unidade Federativa é obrigatório!'})
    public unfdSigla: string;
    @prop()
    public unfdPreposicao?: string;
    @prop()
    public unfdNrIbge?: string;
    @prop()
    public unfdCepInicial?: string;
    @prop()
    public unfdCepFinal?: string;
    @required()
    public cmnsPais: ICmnsPais;

    public cmnsLocalidades?: ICmnsLocalidade[];

    constructor(value?: Partial<ICmnsUnidadeFederativa>) {
        super(value);
        this.unfdNome = value?.unfdNome ?? null;
        this.unfdSigla = value?.unfdSigla ?? null;
        this.unfdPreposicao = value?.unfdPreposicao ?? null;
        this.unfdNrIbge = value?.unfdNrIbge ?? null;
        this.unfdCepInicial = value?.unfdCepInicial ?? null;
        this.unfdCepFinal = value?.unfdCepFinal ?? null;
        this.cmnsPais = value?.cmnsPais ?? null;
        this.cmnsLocalidades = value?.cmnsLocalidades ?? null;
    }
}

