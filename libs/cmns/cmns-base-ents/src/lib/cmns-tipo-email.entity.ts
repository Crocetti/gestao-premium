import { Column, Entity, Index, OneToMany } from "typeorm";
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsTipoEmail } from '@gpremium/cmns-interfaces';

@Index("PK_CMNS_TIPO_EMAIL", ["id"], { unique: true })
@Entity("CMNS_TIPO_EMAIL")
export class CmnsTipoEmail extends BasicEntity implements ICmnsTipoEmail  {
  @Column("nvarchar", { name: "TPEM_CODIGO", nullable: true, length: 3 })
  public tpemCodigo: string | null;

  @Column("nvarchar", { name: "TPEM_NOME", nullable: true, length: 64 })
  public tpemNome: string | null;

}
