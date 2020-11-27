import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { required } from '@rxweb/reactive-form-validators';

export interface ICmnsOrgaoExpedidor extends BasicInterface {
    orexCodigo: string;
    orexSigla: string;
    orexNome: string;
}

export class CmnsOrgaoExpedidorDto extends BasicModel implements ICmnsOrgaoExpedidor {
    @required({message: 'O código do Orgão Expedidor é obrigatório'})
    public orexCodigo: string;
    @required({message: 'A sigla do Orgão Expedidor é obrigatório'})
    public orexSigla: string;
    @required({message: 'O nome do Orgão Expedidor é obrigatório'})
    public orexNome: string;

    constructor(value?: Partial<ICmnsOrgaoExpedidor>) {
        super(value);
        this.orexCodigo = value?.orexCodigo ?? null;
        this.orexSigla = value?.orexSigla ?? null;
        this.orexNome = value?.orexNome ?? null;
    }

    public patchValues(values: Partial<ICmnsOrgaoExpedidor>){
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}
