import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmObjetoVersao from "./sstm-objeto-versao";
import SstmSistemaVersao from "./sstm-sistema-versao";

@Index("PK_SSTM_SISTEMAVERSAO_OBJETOVE", ["id"], { unique: true })
@Entity("SSTM_SISTEMAVERSAO_OBJETOVERSAO")
export default class SstmSistemaversaoObjetoversao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

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

  @ManyToOne(
    () => SstmObjetoVersao,
    (sstmObjetoVersao) => sstmObjetoVersao.sstmSistemaversaoObjetoversaos
  )
  @JoinColumn([{ name: "SVOV_OBVS_ID", referencedColumnName: "id" }])
  public svovObvs?: SstmObjetoVersao;

  @ManyToOne(
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.sstmSistemaversaoObjetoversaos
  )
  @JoinColumn([{ name: "SVOV_SSVS_ID", referencedColumnName: "id" }])
  public svovSsvs?: SstmSistemaVersao;
}
