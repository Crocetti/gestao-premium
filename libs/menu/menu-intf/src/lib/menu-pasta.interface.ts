import { required } from '@rxweb/reactive-form-validators';
import type { BasicInterface } from '@gpremium/shared-int';
import { BasicModel } from '@gpremium/shared-int';

export interface IMenuPasta extends BasicInterface {
    pstaCodigo: string;
    pstaModl?: MenuModulo;
    pstaNome?: string | null;
    pstaDescricao?: string | null;
    pstaTpMenu?: string | null;
    pstaSmallIcon?: string | null;
    pstaNormalIcon?: string | null;
    pstaLargeIcon?: string | null;

    menuRecursos?: MenuRecurso[];
    menuSistemaPastas?: MenuSistemaPasta[];
}

export class MenuPastaDto extends BasicModel implements IMenuPasta {
    @required({message: 'O código da pasta é obrigatório!'})
    pstaCodigo: string;
    @required({message: 'O nome da pasta é obrigatório!'})
    public pstaNome?: string | null;
    @required({message: 'Descrição da pasta é obrigatório!'})
    public pstaDescricao?: string | null;
    @prop()
    public pstaModl?: MenuModulo;
    @prop()
    public pstaTpMenu?: string | null;
    @prop()
    public pstaSmallIcon?: string | null;
    @prop()
    public pstaNormalIcon?: string | null;
    @prop()
    public pstaLargeIcon?: string | null;

    public menuRecursos?: MenuRecurso[];
    public menuSistemaPastas?: MenuSistemaPasta[];

    constructor(param?: IMenuPasta) {
        super(param);
        this.pstaModl = param?.pstaModl ?? null;
        this.pstaNome = param?.pstaNome ?? null;
        this.pstaDescricao = param?.pstaDescricao ?? null;
        this.pstaTpMenu = param?.pstaTpMenu ?? null;
        this.pstaSmallIcon = param?.pstaSmallIcon ?? null;
        this.pstaNormalIcon = param?.pstaNormalIcon ?? null;
        this.pstaLargeIcon = param?.pstaLargeIcon ?? null;
    }
}
