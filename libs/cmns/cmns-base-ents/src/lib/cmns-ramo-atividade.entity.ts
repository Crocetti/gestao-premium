import { BasicEntity } from '@gpremium/shared-ent';
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import type { ICmnsRamoAtividade } from '@gpremium/cmns-interfaces';

@Index("PK_CMNS_RAMO_ATIVIDADE", ["id"], { unique: true })
@Entity("CMNS_RAMO_ATIVIDADE")
export class CmnsRamoAtividade extends BasicEntity implements ICmnsRamoAtividade {

  @Column("nvarchar", { name: "RMAT_NOME", nullable: true, length: 256 })
  public rmatNome: string | null;

  @Column("nvarchar", { name: "RMAT_CODIGO_RF", nullable: true, length: 10 })
  public rmatCodigoRf: string | null;

  @Column("smallint", { name: "RMAT_RETEM_CONFINS", nullable: true })
  public rmatRetemConfins: number | null;

  @Column("smallint", { name: "RMAT_RETEM_PIS", nullable: true })
  public rmatRetemPis: number | null;

  @Column("smallint", { name: "RMAT_RETEM_CSLL", nullable: true })
  public rmatRetemCsll: number | null;

  @ManyToOne(
    () => CmnsRamoAtividade,
    (cmnsRamoAtividade) => cmnsRamoAtividade.cmnsRamoAtividades
  )
  @JoinColumn([{ name: "RMAT_RMAT_ID", referencedColumnName: "id" }])
  public cmnsRamoAtividade: ICmnsRamoAtividade;

  @OneToMany(
    () => CmnsRamoAtividade,
    (cmnsRamoAtividade) => cmnsRamoAtividade.cmnsRamoAtividade
  )
  public cmnsRamoAtividades: ICmnsRamoAtividade[];
}
