import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { PecrEventoSanitario } from "./pecr-evento-sanitario";

@Index("PK_PECR_TIPO_EVENTO_SANITARIO", ["tpesId"], { unique: true })
@Entity("PECR_TIPO_EVENTO_SANITARIO")
export class PecrTipoEventoSanitario extends BaseEntity {
  @Column("varchar", { primary: true, name: "TPES_ID", length: 27 })
  public tpesId: string;

  @Column("varchar", { name: "TPES_CODIGO", nullable: true, length: 3 })
  public tpesCodigo: string | null;

  @Column("varchar", { name: "TPES_TIPO", nullable: true, length: 20 })
  public tpesTipo: string | null;

  @Column("varchar", { name: "TPES_NOME", nullable: true, length: 40 })
  public tpesNome: string | null;

  @OneToMany(
    () => PecrEventoSanitario,
    (pecrEventoSanitario) => pecrEventoSanitario.evsnTpes
  )
  public pecrEventoSanitarios: PecrEventoSanitario[];

  public constructor(init?: Partial<PecrTipoEventoSanitario>) {
    super();
    Object.assign(this, init);
  }
}
