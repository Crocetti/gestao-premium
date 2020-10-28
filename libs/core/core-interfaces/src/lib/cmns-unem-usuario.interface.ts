import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import type { ICmnsUsuario,  ICmnsGrupoUsuario } from '@gpremium/cmns-interfaces';
import type { ICoreUnidadeEmpresarial } from './core-unidade-empresarial.interface';
import { prop } from '@rxweb/reactive-form-validators';

export interface ICmnsUnemUsuario extends BasicInterface {
    cmnsUsuario: ICmnsUsuario;
    cmnsGrupoUsuario: ICmnsGrupoUsuario;
    coreUnidadeEmpresarial: ICoreUnidadeEmpresarial;
}

export class CmnsUnemUsuarioDto extends BasicModel implements ICmnsUnemUsuario  {
    @prop()
    public cmnsUsuario: ICmnsUsuario;
    @prop()
    public cmnsGrupoUsuario: ICmnsGrupoUsuario;
    @prop()
    public coreUnidadeEmpresarial: ICoreUnidadeEmpresarial;

    constructor(param?: Partial<ICmnsUnemUsuario>) {
        super(param);
        Object.assign(this, param);
    }
}
