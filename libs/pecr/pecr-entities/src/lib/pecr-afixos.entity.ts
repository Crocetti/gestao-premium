import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstClasseProduto } from "./cdst-classe-produto";
import { CdstProdutorRural } from "./cdst-produtor-rural";
import { PecrRaca } from "./pecr-raca";

@Index("PK_PECR_AFIXOS", ["id"], { unique: true })
@Entity("PECR_AFIXOS")
export class PecrAfixos {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "AFXS_PREFIXO_MACHO",
    nullable: true,
    length: 10,
  })
  public afxsPrefixoMacho: string | null;

  @Column("nvarchar", {
    name: "AFXS_PREFIXO_FEMEA",
    nullable: true,
    length: 10,
  })
  public afxsPrefixoFemea: string | null;

  @Column("nvarchar", { name: "AFXS_SUFIXO_MACHO", nullable: true, length: 10 })
  public afxsSufixoMacho: string | null;

  @Column("nvarchar", { name: "AFXS_SUFIXO_FEMEA", nullable: true, length: 10 })
  public afxsSufixoFemea: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => CdstClasseProduto,
    (cdstClasseProduto) => cdstClasseProduto.pecrAfixos
  )
  @JoinColumn([{ name: "AFXS_CLPR_ID", referencedColumnName: "id" }])
  public afxsClpr: CdstClasseProduto;

  @ManyToOne(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.pecrAfixos
  )
  @JoinColumn([{ name: "AFXS_PDRR_ID", referencedColumnName: "id" }])
  public afxsPdrr: CdstProdutorRural;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrAfixos)
  @JoinColumn([{ name: "AFXS_RACA_ID", referencedColumnName: "id" }])
  public afxsRaca: PecrRaca;
}
