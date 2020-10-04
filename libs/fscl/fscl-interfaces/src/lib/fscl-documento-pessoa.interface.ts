import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { FsclDocumento } from "./fscl-documento";

@Index("FK_DCMT_RS_DCPS", ["dcpsDcmtId"], {})
@Index("PK_FSCL_DOCUMENTO_PESSOA", ["dcpsId"], { unique: true })
@Entity("FSCL_DOCUMENTO_PESSOA")
export class FsclDocumentoPessoa extends BaseEntity {
  @Column("varchar", { primary: true, name: "DCPS_ID", length: 27 })
  public dcpsId: string;

  @Column("varchar", { name: "DCPS_DCMT_ID", nullable: true, length: 27 })
  public dcpsDcmtId: string | null;

  @Column("varchar", { name: "DCPS_TIPO", nullable: true, length: 15 })
  public dcpsTipo: string | null;

  @Column("varchar", { name: "DCPS_RAZAO_SOCIAL", nullable: true, length: 128 })
  public dcpsRazaoSocial: string | null;

  @Column("varchar", { name: "DCPS_APELIDO", nullable: true, length: 128 })
  public dcpsApelido: string | null;

  @Column("varchar", { name: "DCPS_ENDE_CEP", nullable: true, length: 9 })
  public dcpsEndeCep: string | null;

  @Column("varchar", {
    name: "DCPS_ENDE_LOGRADOURO",
    nullable: true,
    length: 128,
  })
  public dcpsEndeLogradouro: string | null;

  @Column("varchar", { name: "DCPS_ENDE_NUMERO", nullable: true, length: 15 })
  public dcpsEndeNumero: string | null;

  @Column("varchar", {
    name: "DCPS_ENDE_COMPLEMENTO",
    nullable: true,
    length: 128,
  })
  public dcpsEndeComplemento: string | null;

  @Column("varchar", { name: "DCPS_ENDE_BAIRRO", nullable: true, length: 40 })
  public dcpsEndeBairro: string | null;

  @Column("varchar", { name: "DCPS_ENDE_CIDADE", nullable: true, length: 128 })
  public dcpsEndeCidade: string | null;

  @Column("varchar", { name: "DCPS_ENDE_UF", nullable: true, length: 3 })
  public dcpsEndeUf: string | null;

  @Column("varchar", { name: "DCPS_TELEFONE", nullable: true, length: 15 })
  public dcpsTelefone: string | null;

  @ManyToOne(
    () => FsclDocumento,
    (fsclDocumento) => fsclDocumento.fsclDocumentoPessoas
  )
  @JoinColumn([{ name: "DCPS_DCMT_ID", referencedColumnName: "dcmtId" }])
  public dcpsDcmt: FsclDocumento;

  @RelationId(
    (fsclDocumentoPessoa: FsclDocumentoPessoa) => fsclDocumentoPessoa.dcpsDcmt
  )
  public dcpsDcmtId2: string | null;

  public constructor(init?: Partial<FsclDocumentoPessoa>) {
    super();
    Object.assign(this, init);
  }
}
