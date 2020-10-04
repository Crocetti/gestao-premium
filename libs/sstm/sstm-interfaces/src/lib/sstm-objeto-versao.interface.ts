import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { SstmObjeto } from "./sstm-objeto";
import { SstmSistemaversaoObjetoversao } from "./sstm-sistemaversao-objetoversao";

@Index("FK_OBJT_RS_OBBN", ["obbnObjtId"], {})
@Index("PK_SSTM_OBJETO_VERSAO", ["obvsId"], { unique: true })
@Entity("SSTM_OBJETO_VERSAO")
export class SstmObjetoVersao extends BaseEntity {
  @Column("varchar", { primary: true, name: "OBVS_ID", length: 27 })
  public obvsId: string;

  @Column("varchar", { name: "OBBN_OBJT_ID", nullable: true, length: 27 })
  public obbnObjtId: string | null;

  @Column("varchar", { name: "OBVS_VERSION", nullable: true, length: 20 })
  public obvsVersion: string | null;

  @Column("varchar", { name: "OBVS_CHECKSUM", nullable: true, length: 128 })
  public obvsChecksum: string | null;

  @Column("image", { name: "OBVS_BINARY", nullable: true })
  public obvsBinary: Buffer | null;

  @Column("datetime", { name: "OBVS_LASTUPDATE", nullable: true })
  public obvsLastupdate: LocalDateTime | null;

  @ManyToOne(() => SstmObjeto, (sstmObjeto) => sstmObjeto.sstmObjetoVersaos)
  @JoinColumn([{ name: "OBBN_OBJT_ID", referencedColumnName: "objtId" }])
  public obbnObjt: SstmObjeto;

  @OneToMany(
    () => SstmSistemaversaoObjetoversao,
    (sstmSistemaversaoObjetoversao) => sstmSistemaversaoObjetoversao.svovObvs
  )
  public sstmSistemaversaoObjetoversaos: SstmSistemaversaoObjetoversao[];

  @RelationId((sstmObjetoVersao: SstmObjetoVersao) => sstmObjetoVersao.obbnObjt)
  public obbnObjtId2: string | null;

  public constructor(init?: Partial<SstmObjetoVersao>) {
    super();
    Object.assign(this, init);
  }
}
