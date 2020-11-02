import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from "typeorm";
import type { ICmnsTipoTelefone } from '@gpremium/cmns-base-intf';

@Index("PK_CMNS_TIPO_TELEFONE", ["id"], { unique: true })
@Entity("CMNS_TIPO_TELEFONE")
export class CmnsTipoTelefone extends BasicEntity implements ICmnsTipoTelefone {

  @Column("nvarchar", { name: "TPTL_CODIGO", nullable: true, length: 3 })
  public tptlCodigo: string | null;

  @Column("nvarchar", { name: "TPTL_NOME", nullable: true, length: 64 })
  public tptlNome: string | null;

}
