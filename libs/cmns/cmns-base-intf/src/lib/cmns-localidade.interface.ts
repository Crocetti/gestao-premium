import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import { ICmnsBairro } from './cmns-bairro.interface';
import { ICmnsUnidadeFederativa } from './cmns-unidade-federativa.interface';

export interface ICmnsLocalidade extends BasicInterface {
    lcldCodigo: string;
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
    @required({message: 'O Código da Localidade é obrigatório!'})
    public lcldCodigo: string;
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

    constructor(values?: Partial<ICmnsLocalidade>) {
        super(values);
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }

    public patchValues(values: Partial<ICmnsLocalidade>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}
