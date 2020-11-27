import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsProfissao extends BasicInterface {
    profCodigo: string;
    profNome: string;
    profCodigoIrpf?: string;
    cmnsProfissao?: ICmnsProfissao;
    cmnsProfissoes?: ICmnsProfissao[];
}

export class CmnsProfissaoDto extends BasicModel implements  ICmnsProfissao {
    @required({message: 'O código é obrigatório na Profissão! '})
    public profCodigo: string;
    @required({message: 'O nome é obrigatório na Profissão! '})
    public profNome: string;
    @prop()
    public profCodigoIrpf?: string;
    @prop()
    public cmnsProfissao?: ICmnsProfissao;
    @prop()
    public cmnsProfissoes?: ICmnsProfissao[];

    constructor(param?: Partial<ICmnsProfissao>) {
        super(param);
        this.profCodigo = param?.profCodigo ?? null;
        this.profNome = param?.profNome ?? null;
        this.profCodigoIrpf = param?.profCodigoIrpf ?? null;
        this.cmnsProfissao = param?.cmnsProfissao ?? null;
        this.cmnsProfissoes = param?.cmnsProfissoes ?? null;
    }

    public patchValues(values: Partial<ICmnsProfissao>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}

