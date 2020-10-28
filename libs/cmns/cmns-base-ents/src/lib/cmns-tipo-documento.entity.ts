import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from "typeorm";
import type { ICmnsTipoDocumento } from '@gpremium/cmns-interfaces';

@Index("PK_CMNS_TIPO_DOCUMENTO", ["id"], { unique: true })
@Entity("CMNS_TIPO_DOCUMENTO")
export class CmnsTipoDocumento extends BasicEntity implements ICmnsTipoDocumento {

  @Column("nvarchar", { name: "TPDC_CODIGO", nullable: true, length: 3 })
  public tpdcCodigo: string | null;

  @Column("nvarchar", { name: "TPDC_NOME", nullable: true, length: 64 })
  public tpdcNome: string | null;

  @Column("nvarchar", { name: "TPDC_TIPO", nullable: true, length: 15 })
  public tpdcTipo: string | null;

}
