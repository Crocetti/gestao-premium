import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { SstmObjetoVersao } from "./sstm-objeto-versao";

@Index("PK_SSTM_OBJETO", ["objtId"], { unique: true })
@Entity("SSTM_OBJETO")
export class SstmObjeto extends BaseEntity {
  @Column("varchar", { primary: true, name: "OBJT_ID", length: 27 })
  public objtId: string;

  @Column("varchar", { name: "OBJT_NAME", nullable: true, length: 64 })
  public objtName: string | null;

  @Column("varchar", { name: "OBJT_FILE", nullable: true, length: 128 })
  public objtFile: string | null;

  @Column("varchar", { name: "OBJT_PATH", nullable: true, length: 256 })
  public objtPath: string | null;

  @Column("varchar", { name: "OBJT_TYPE", nullable: true, length: 15 })
  public objtType: string | null;

  @Column("datetime", { name: "OBJT_LASTUPDATE", nullable: true })
  public objtLastupdate: LocalDateTime | null;

  @OneToMany(
    () => SstmObjetoVersao,
    (sstmObjetoVersao) => sstmObjetoVersao.obbnObjt
  )
  public sstmObjetoVersaos: SstmObjetoVersao[];

  public constructor(init?: Partial<SstmObjeto>) {
    super();
    Object.assign(this, init);
  }
}
