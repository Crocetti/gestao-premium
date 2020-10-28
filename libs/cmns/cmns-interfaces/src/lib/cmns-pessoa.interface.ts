import { BasicInterface, BasicModel } from '@gpremium/shared-int';
import { prop, required } from '@rxweb/reactive-form-validators';
import { ICmnsPessoaDocumento } from './cmns-pessoa-documento.interface';
import { ICmnsPessoaEmail } from './cmns-pessoa-email.interface';
import { ICmnsPessoaEndereco } from './cmns-pessoa-endereco.interface';
import { ICmnsPessoaFisica } from './cmns-pessoa-fisica.interface';
import { ICmnsPessoaImagem } from './cmns-pessoa-imagem.interface';
import { ICmnsPessoaJuridica } from './cmns-pessoa-juridica.interface';
import { ICmnsPessoaTelefone } from './cmns-pessoa-telefone.interface';
import { ICmnsUsuario } from './cmns-usuario.interface';

export interface ICmnsPessoa extends BasicInterface {
    pessCodigo: string;
    pessCpfCnpj: string;
    pessNome: string;
    pessFisicaJuridica: string;
    pessObservacao?: string;
    pessUrl?: string;
    pessRelacionamento?: string;
    cmnsPessoaJuridica?: ICmnsPessoaJuridica;
    CmnsPessoaFisica?: ICmnsPessoaFisica;
    cmnsUsuario?: ICmnsUsuario;
    cmnsPessoaDocumentos?: ICmnsPessoaDocumento[];
    cmnsPessoaEmails?: ICmnsPessoaEmail[];
    cmnsPessoaEnderecos?: ICmnsPessoaEndereco[];
    cmnsPessoaImagens?: ICmnsPessoaImagem[];
    cmnsPessoaTelefones?: ICmnsPessoaTelefone[];

}

export class CmnsPessoaDto extends BasicModel implements ICmnsPessoa {
    @required({message: 'O código da Pessoa é obrigatório!'})
    public pessCodigo: string;
    @required({message: 'O cpf/cnpj da Pessoa é obrigatório!'})
    public pessCpfCnpj: string;
    @required({message: 'O nome da Pessoa é obrigatório!'})
    public pessNome: string;
    @required({message: 'O tipo de pessoa da Pessoa é obrigatório!'})
    public pessFisicaJuridica: string;
    @prop()
    public pessObservacao?: string;
    @prop()
    public pessUrl?: string;
    @prop()
    public pessRelacionamento?: string;
    @prop()
    public cmnsPessoaJuridica?: ICmnsPessoaJuridica;
    @prop()
    public cmnsPessoaFisica?: ICmnsPessoaFisica;
    @prop()
    public cmnsUsuario?: ICmnsUsuario;
    @prop()
    public cmnsPessoaDocumentos?: ICmnsPessoaDocumento[];
    @prop()
    public cmnsPessoaEmails?: ICmnsPessoaEmail[];
    @prop()
    public cmnsPessoaEnderecos?: ICmnsPessoaEndereco[];
    @prop()
    public cmnsPessoaImagens?: ICmnsPessoaImagem[];
    @prop()
    public cmnsPessoaTelefones?: ICmnsPessoaTelefone[];

    constructor(param?: Partial<ICmnsPessoa>) {
        super(param);
        this.pessCodigo = param?.pessCodigo ?? null;
        this.pessCpfCnpj = param?.pessCpfCnpj ?? null;
        this.pessNome = param?.pessNome ?? null;
        this.pessFisicaJuridica = param?.pessFisicaJuridica ?? null;
        this.pessObservacao = param?.pessObservacao ?? null;
        this.pessUrl = param?.pessUrl ?? null;
        this.pessRelacionamento = param?.pessRelacionamento ?? null;
        this.cmnsPessoaFisica = param?.CmnsPessoaFisica ?? null;
        this.cmnsPessoaJuridica = param?.cmnsPessoaJuridica ?? null;
        //
        this.cmnsPessoaDocumentos = param?.cmnsPessoaDocumentos ?? null;
        this.cmnsPessoaEmails = param?.cmnsPessoaEmails ?? null;
        this.cmnsPessoaEnderecos = param?.cmnsPessoaEnderecos ?? null;
        this.cmnsPessoaImagens = param?.cmnsPessoaImagens ?? null;
        this.cmnsPessoaTelefones = param?.cmnsPessoaTelefones ?? null;

    }

}
