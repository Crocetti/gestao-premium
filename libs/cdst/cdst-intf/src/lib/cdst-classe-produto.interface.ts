import { BasicInterface, BasicModel } from '@gpremium/shared-int';

export  interface ICdstClasseProduto extends BasicInterface {
    clprCodigo:string;
    clprNome:string;
    clprPatrimonio:number;
    clprTipo:string;
}

export  class CdstClasseProdutoDto extends BasicModel {
    public clprCodigo:string;
    public clprNome:string;
    public clprPatrimonio:number;
    public clprTipo:string;

    constructor(values: Partial<ICdstClasseProduto>) {
        super(values);
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }

    public patchValues(values: Partial<ICdstClasseProduto>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }
}
