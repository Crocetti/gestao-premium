import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { FncrTitulo } from "./fncr-titulo";
import { FsclDocumento } from "./fscl-documento";

@Index("PK_CDST_FORNECEDOR", ["id"], { unique: true })
@Entity("CDST_FORNECEDOR")
export class CdstFornecedor {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "FRNC_OBS", nullable: true })
  public frncObs: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstFornecedors)
  @JoinColumn([{ name: "FRNC_PESS_ID", referencedColumnName: "id" }])
  public frncPess: CmnsPessoa;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvFrnc
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsFrnc)
  public fncrTitulos: FncrTitulo[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtFrnc)
  public fsclDocumentos: FsclDocumento[];
}
