import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop } from '@rxweb/reactive-form-validators';

export interface ICmnsRamoAtividade extends BasicInterface {
    rmatNome: string;
    rmatCodigoRf: string;
    rmatRetemConfins: number;
    rmatRetemPis: number;
    rmatRetemCsll: number;
    cmnsRamoAtividade: ICmnsRamoAtividade;
    cmnsRamoAtividades: ICmnsRamoAtividade[];
}

export class CmnsRamoAtividadeDto extends BasicModel implements ICmnsRamoAtividade {
    @prop()
    public rmatNome: string;
    @prop()
    public rmatCodigoRf: string;
    @prop()
    public rmatRetemConfins: number;
    @prop()
    public rmatRetemPis: number;
    @prop()
    public rmatRetemCsll: number;
    @prop()
    public cmnsRamoAtividade: ICmnsRamoAtividade;
    @prop()
    public cmnsRamoAtividades: ICmnsRamoAtividade[];

    constructor(param?: Partial<ICmnsRamoAtividade>) {
        super(param);
        this.rmatNome = param?.rmatNome ?? null;
        this.rmatCodigoRf = param?.rmatCodigoRf ?? null;
        this.rmatRetemConfins = param?.rmatRetemConfins ?? null;
        this.rmatRetemPis = param?.rmatRetemPis ?? null;
        this.rmatRetemCsll = param?.rmatRetemCsll ?? null;
        this.cmnsRamoAtividade = param?.cmnsRamoAtividade ?? null;
        this.cmnsRamoAtividades = param?.cmnsRamoAtividades ?? null;
    }

    public patchValues(values: Partial<ICmnsRamoAtividade>) {
        const keys = Object.keys(values);
        keys.forEach((key) => {
            if (this.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        });
    }

}

