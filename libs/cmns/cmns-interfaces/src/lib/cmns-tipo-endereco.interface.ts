import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';

export interface ICmnsTipoEndereco extends BasicInterface {
    tpenCodigo: string;
    tpenNome: string;
}

export class CmnsTipoEnderecoDto extends BasicModel
    implements ICmnsTipoEndereco {
    @prop()
    @required({message: 'O código do tipo de endereço é obrigatório!'})
    public tpenCodigo: string;
    @prop()
    @required({message: 'O nome do tipo de endereço é obrigatório!'})
    public tpenNome: string;
}
