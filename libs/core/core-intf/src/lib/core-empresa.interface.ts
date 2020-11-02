import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { ICoreCorporacao } from './core-corporacao.interface';
import { ICoreUnidadeEmpresarial } from './core-unidade-empresarial.interface';

export interface ICoreEmpresa extends BasicInterface  {
    emprNome: string;
    emprSenha: string;
    emprLogomarca: string;
    coreCorporacao: ICoreCorporacao;
    coreUnidadeEmpresarials: ICoreUnidadeEmpresarial[];
}

export class CoreEmpresaDto extends BasicModel implements ICoreEmpresa {
    public emprNome: string | null;
    public emprSenha: string | null;
    public emprLogomarca: string | null;
    public coreCorporacao: ICoreCorporacao;
    public coreUnidadeEmpresarials: ICoreUnidadeEmpresarial[];

    constructor(param?: Partial<ICoreEmpresa>) {
        super(param);
        Object.assign(this, param)
    }
}
