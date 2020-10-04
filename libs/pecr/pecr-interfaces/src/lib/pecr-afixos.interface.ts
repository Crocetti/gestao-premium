import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CdstProdutorRural } from "./cdst-produtor-rural";
import { CdstClasseProduto } from "./cdst-classe-produto";
import { PecrRaca } from "./pecr-raca";

@Index("FK_CLPR_RS_AFXS", ["afxsClprId"], {})
@Index("FK_PDRR_RS_AFXS", ["afxsPdrrId"], {})
@Index("FK_RACA_RS_AFXS", ["afxsRacaId"], {})
@Index("PK_PECR_AFIXOS", ["afxsId"], { unique: true })
@Entity("PECR_AFIXOS")
export class PecrAfixos extends BaseEntity {
  @Column("varchar", { primary: true, name: "AFXS_ID", length: 27 })
  public afxsId: string;

  @Column("varchar", { name: "AFXS_CLPR_ID", nullable: true, length: 27 })
  public afxsClprId: string | null;

  @Column("varchar", { name: "AFXS_PDRR_ID", nullable: true, length: 27 })
  public afxsPdrrId: string | null;

  @Column("varchar", { name: "AFXS_RACA_ID", nullable: true, length: 27 })
  public afxsRacaId: string | null;

  @Column("varchar", { name: "AFXS_PREFIXO_MACHO", nullable: true, length: 10 })
  public afxsPrefixoMacho: string | null;

  @Column("varchar", { name: "AFXS_PREFIXO_FEMEA", nullable: true, length: 10 })
  public afxsPrefixoFemea: string | null;

  @Column("varchar", { name: "AFXS_SUFIXO_MACHO", nullable: true, length: 10 })
  public afxsSufixoMacho: string | null;

  @Column("varchar", { name: "AFXS_SUFIXO_FEMEA", nullable: true, length: 10 })
  public afxsSufixoFemea: string | null;

  @ManyToOne(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.pecrAfixos
  )
  @JoinColumn([{ name: "AFXS_PDRR_ID", referencedColumnName: "pdrrId" }])
  public afxsPdrr: CdstProdutorRural;

  @ManyToOne(
    () => CdstClasseProduto,
    (cdstClasseProduto) => cdstClasseProduto.pecrAfixos
  )
  @JoinColumn([{ name: "AFXS_CLPR_ID", referencedColumnName: "clprId" }])
  public afxsClpr: CdstClasseProduto;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrAfixos)
  @JoinColumn([{ name: "AFXS_RACA_ID", referencedColumnName: "racaId" }])
  public afxsRaca: PecrRaca;

  @RelationId((pecrAfixos: PecrAfixos) => pecrAfixos.afxsPdrr)
  public afxsPdrrId2: string | null;

  @RelationId((pecrAfixos: PecrAfixos) => pecrAfixos.afxsClpr)
  public afxsClprId2: string | null;

  @RelationId((pecrAfixos: PecrAfixos) => pecrAfixos.afxsRaca)
  public afxsRacaId2: string | null;

  public constructor(init?: Partial<PecrAfixos>) {
    super();
    Object.assign(this, init);
  }
}
