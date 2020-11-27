import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import SstmObjeto from "./sstm-objeto";
import SstmSistemaversaoObjetoversao from "./sstm-sistemaversao-objetoversao";

@Index("PK_SSTM_OBJETO_VERSAO", ["id"], { unique: true })
@Entity("SSTM_OBJETO_VERSAO")
export default class SstmObjetoVersao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "OBVS_VERSION", nullable: true, length: 20 })
  public obvsVersion?: string | null;

  @Column("nvarchar", { name: "OBVS_CHECKSUM", nullable: true, length: 128 })
  public obvsChecksum?: string | null;

  @Column("nvarchar", { name: "OBVS_BINARY", nullable: true })
  public obvsBinary?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @ManyToOne(() => SstmObjeto, (sstmObjeto) => sstmObjeto.sstmObjetoVersaos)
  @JoinColumn([{ name: "OBBN_OBJT_ID", referencedColumnName: "id" }])
  public obbnObjt?: SstmObjeto;

  @OneToMany(
    () => SstmSistemaversaoObjetoversao,
    (sstmSistemaversaoObjetoversao) => sstmSistemaversaoObjetoversao.svovObvs
  )
  public sstmSistemaversaoObjetoversaos?: SstmSistemaversaoObjetoversao[];
}
