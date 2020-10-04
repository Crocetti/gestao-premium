import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CdstCliente } from "./cdst-cliente";
import { CdstFabricante } from "./cdst-fabricante";
import { CdstFornecedor } from "./cdst-fornecedor";
import { CdstProdutorRural } from "./cdst-produtor-rural";
import { CdstPropriedadeRural } from "./cdst-propriedade-rural";
import { CdstTransportadora } from "./cdst-transportadora";
import { CmnsPessoaDocumento } from "./cmns-pessoa-documento";
import { CmnsPessoaEmail } from "./cmns-pessoa-email";
import { CmnsPessoaEndereco } from "./cmns-pessoa-endereco";
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";
import { CmnsPessoaImagem } from "./cmns-pessoa-imagem";
import { CmnsPessoaJuridica } from "./cmns-pessoa-juridica";
import { CmnsPessoaTelefone } from "./cmns-pessoa-telefone";
import { CmnsUsuario } from "./cmns-usuario";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";
import { FncrCaixa } from "./fncr-caixa";
import { FncrCaixaItem } from "./fncr-caixa-item";
import { PecfCaixa } from "./pecf-caixa";
import { PecfContador } from "./pecf-contador";
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteAnimal } from "./vete-animal";

@Index("PK_CMNS_PESSOA", ["pessId"], { unique: true })
@Entity("CMNS_PESSOA")
export class CmnsPessoa extends BaseEntity {
  @Column("varchar", { primary: true, name: "PESS_ID", length: 27 })
  public pessId: string;

  @Column("varchar", { name: "PESS_CODIGO", nullable: true, length: 10 })
  public pessCodigo: string | null;

  @Column("varchar", { name: "PESS_CPF_CNPJ", nullable: true, length: 18 })
  public pessCpfCnpj: string | null;

  @Column("varchar", { name: "PESS_NOME", nullable: true, length: 128 })
  public pessNome: string | null;

  @Column("varchar", {
    name: "PESS_FISICA_JURIDICA",
    nullable: true,
    length: 10,
  })
  public pessFisicaJuridica: string | null;

  @Column("varchar", { name: "PESS_OBSERVACAO", nullable: true, length: 5000 })
  public pessObservacao: string | null;

  @Column("varchar", { name: "PESS_URL", nullable: true, length: 256 })
  public pessUrl: string | null;

  @Column("varchar", {
    name: "PESS_RELACIONAMENTO",
    nullable: true,
    length: 256,
  })
  public pessRelacionamento: string | null;

  @Column("datetime", { name: "PESS_LASTUPDATE", nullable: true })
  public pessLastupdate: LocalDateTime | null;

  @OneToMany(() => CdstCliente, (cdstCliente) => cdstCliente.clntPess)
  public cdstClientes: CdstCliente[];

  @OneToMany(() => CdstFabricante, (cdstFabricante) => cdstFabricante.fbctPess)
  public cdstFabricantes: CdstFabricante[];

  @OneToMany(() => CdstFornecedor, (cdstFornecedor) => cdstFornecedor.frncPess)
  public cdstFornecedors: CdstFornecedor[];

  @OneToMany(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.pdrrPess
  )
  public cdstProdutorRurals: CdstProdutorRural[];

  @OneToMany(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.pprrPess
  )
  public cdstPropriedadeRurals: CdstPropriedadeRural[];

  @OneToMany(
    () => CdstTransportadora,
    (cdstTransportadora) => cdstTransportadora.trnsPess
  )
  public cdstTransportadoras: CdstTransportadora[];

  @OneToMany(
    () => CmnsPessoaDocumento,
    (cmnsPessoaDocumento) => cmnsPessoaDocumento.psdcPess
  )
  public cmnsPessoaDocumentos: CmnsPessoaDocumento[];

  @OneToMany(
    () => CmnsPessoaEmail,
    (cmnsPessoaEmail) => cmnsPessoaEmail.psemPess
  )
  public cmnsPessoaEmails: CmnsPessoaEmail[];

  @OneToMany(
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenPess
  )
  public cmnsPessoaEnderecos: CmnsPessoaEndereco[];

  @OneToMany(
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsPess
  )
  public cmnsPessoaFisicas: CmnsPessoaFisica[];

  @OneToMany(
    () => CmnsPessoaImagem,
    (cmnsPessoaImagem) => cmnsPessoaImagem.psimPess
  )
  public cmnsPessoaImagems: CmnsPessoaImagem[];

  @OneToMany(
    () => CmnsPessoaJuridica,
    (cmnsPessoaJuridica) => cmnsPessoaJuridica.psjrPess
  )
  public cmnsPessoaJuridicas: CmnsPessoaJuridica[];

  @OneToMany(
    () => CmnsPessoaTelefone,
    (cmnsPessoaTelefone) => cmnsPessoaTelefone.pstlPess
  )
  public cmnsPessoaTelefones: CmnsPessoaTelefone[];

  @OneToMany(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.usrsPess)
  public cmnsUsuarios: CmnsUsuario[];

  @OneToMany(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.unemPess
  )
  public coreUnidadeEmpresarials: CoreUnidadeEmpresarial[];

  @OneToMany(() => FncrCaixa, (fncrCaixa) => fncrCaixa.caixPess)
  public fncrCaixas: FncrCaixa[];

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitPess)
  public fncrCaixaItems: FncrCaixaItem[];

  @OneToMany(() => PecfCaixa, (pecfCaixa) => pecfCaixa.pecxPess)
  public pecfCaixas: PecfCaixa[];

  @OneToMany(() => PecfContador, (pecfContador) => pecfContador.ctdrPess)
  public pecfContadors: PecfContador[];

  @OneToMany(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.fcnrPess
  )
  public rchmFuncionarios: RchmFuncionario[];

  @OneToMany(() => VeteAnimal, (veteAnimal) => veteAnimal.anmlPess)
  public veteAnimals: VeteAnimal[];

  public constructor(init?: Partial<CmnsPessoa>) {
    super();
    Object.assign(this, init);
  }
}
