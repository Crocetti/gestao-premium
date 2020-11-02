import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsGrupoUsuario extends BasicInterface {
    grusCodigo: string;
    grusNome: string;
    grusSigla: string;
    grusNivel?: number;
    grusDescMax?: number;
}

export class CmnsGrupoUsuarioDto extends BasicModel implements ICmnsGrupoUsuario {
    @required({message: 'O código do grupo de usuário é obrigatório!'})
    public grusCodigo: string;
    @required({message: 'O nome do grupo de usuário é obrigatório!'})
    public grusNome: string;
    @required({message: 'A sigla do grupo de usuário é obrigatório!'})
    public grusSigla: string;
    @prop()
    public grusNivel?: number;
    @prop()
    public grusDescMax?: number;

    constructor(value?: ICmnsGrupoUsuario) {
        super(value);
        Object.assign(this, value);
    }
}
