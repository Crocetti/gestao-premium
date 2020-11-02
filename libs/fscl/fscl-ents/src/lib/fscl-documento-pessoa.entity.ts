import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FsclDocumento } from "./fscl-documento";

@Index("PK_FSCL_DOCUMENTO_PESSOA", ["id"], { unique: true })
@Entity("FSCL_DOCUMENTO_PESSOA")
export class FsclDocumentoPessoa {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "DCPS_TIPO", nullable: true, length: 15 })
  public dcpsTipo: string | null;

  @Column("nvarchar", {
    name: "DCPS_RAZAO_SOCIAL",
    nullable: true,
    length: 128,
  })
  public dcpsRazaoSocial: string | null;

  @Column("nvarchar", { name: "DCPS_APELIDO", nullable: true, length: 128 })
  public dcpsApelido: string | null;

  @Column("nvarchar", { name: "DCPS_ENDE_CEP", nullable: true, length: 9 })
  public dcpsEndeCep: string | null;

  @Column("nvarchar", {
    name: "DCPS_ENDE_LOGRADOURO",
    nullable: true,
    length: 128,
  })
  public dcpsEndeLogradouro: string | null;

  @Column("nvarchar", { name: "DCPS_ENDE_NUMERO", nullable: true, length: 15 })
  public dcpsEndeNumero: string | null;

  @Column("nvarchar", {
    name: "DCPS_ENDE_COMPLEMENTO",
    nullable: true,
    length: 128,
  })
  public dcpsEndeComplemento: string | null;

  @Column("nvarchar", { name: "DCPS_ENDE_BAIRRO", nullable: true, length: 40 })
  public dcpsEndeBairro: string | null;

  @Column("nvarchar", { name: "DCPS_ENDE_CIDADE", nullable: true, length: 128 })
  public dcpsEndeCidade: string | null;

  @Column("nvarchar", { name: "DCPS_ENDE_UF", nullable: true, length: 3 })
  public dcpsEndeUf: string | null;

  @Column("nvarchar", { name: "DCPS_TELEFONE", nullable: true, length: 15 })
  public dcpsTelefone: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => FsclDocumento,
    (fsclDocumento) => fsclDocumento.fsclDocumentoPessoas
  )
  @JoinColumn([{ name: "DCPS_DCMT_ID", referencedColumnName: "id" }])
  public dcpsDcmt: FsclDocumento;
}
