import type { BasicInterface } from '@gpremium/shared-int';
import { BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators'

export interface IMenuModulo extends BasicInterface {
    modlCodigo: string;
    modlNome?: string;
    modlDescricao?: string;
    modlSmallIcon?: string;
    modlNormalIcon?: string;
    modlLargeIcon?: string;
    menuPastas?: MenuPasta[];
    menuSistemaModulos?: MenuSistemaModulo[];
}

export class MenuModuloDto extends BasicModel  implements IMenuModulo {
    @required({message: 'O código do módulo é obrigatório!'})
    modlCodigo: string;
    @required({message: 'O nome do módulo é obrigatório!'})
    public modlNome?: string | null;
    @required({message: 'A descrição do módulo é obrigatório!'})
    public modlDescricao?: string | null;
    @prop()
    public modlSmallIcon?: string | null;
    @prop()
    public modlNormalIcon?: string | null;
    @prop()
    public modlLargeIcon?: string | null;

    public menuPastas?: MenuPasta[];
    public menuSistemaModulos?: MenuSistemaModulo[];

    constructor(param?: IMenuModulo) {
        super(param);
        this.modlNome = param?.modlNome ?? null;
        this.modlDescricao = param?.modlDescricao ?? null;
        this.modlSmallIcon = param?.modlSmallIcon ?? null;
        this.modlNormalIcon = param?.modlNormalIcon ?? null;
        this.modlLargeIcon = param?.modlLargeIcon ?? null;
    }

}
