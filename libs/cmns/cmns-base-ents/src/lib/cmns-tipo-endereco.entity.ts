import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from "typeorm";
import type { ICmnsTipoEndereco } from '@gpremium/cmns-base-intf';

@Index("PK_CMNS_TIPO_ENDERECO", ["id"], { unique: true })
@Entity("CMNS_TIPO_ENDERECO")
export class CmnsTipoEndereco extends BasicEntity implements ICmnsTipoEndereco {

  @Column("nvarchar", { name: "TPEN_CODIGO", nullable: true, length: 3 })
  public tpenCodigo: string | null;

  @Column("nvarchar", { name: "TPEN_NOME", nullable: true, length: 64 })
  public tpenNome: string | null;

}
