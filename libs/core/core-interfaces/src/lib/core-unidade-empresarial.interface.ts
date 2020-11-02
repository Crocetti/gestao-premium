import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import type { ICoreEmpresa } from './core-empresa.interface';
import type { ICmnsPessoa } from '@gpremium/cmns-pess-intf';

export interface ICoreUnidadeEmpresarial extends BasicInterface {
    unemCodigo: string;
    unemSkinName: string;
    unemSenha: string;
    unemLogomarca: string;
    coreEmpresa: ICoreEmpresa;
    cmnsPessoa: ICmnsPessoa;
}

export class CoreUnidadeEmpresarialDto extends BasicModel
    implements ICoreUnidadeEmpresarial {
    public unemCodigo: string;
    public unemSkinName: string;
    public unemSenha: string;
    public unemLogomarca: string;
    public coreEmpresa: ICoreEmpresa;
    public cmnsPessoa: ICmnsPessoa;

    constructor(param?: Partial<ICoreUnidadeEmpresarial>) {
        super(param);
        Object.assign(this, param);
    }
}
