import { Column, Entity, Index, OneToMany } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { PecrAfixos } from "./pecr-afixos";

@Index("PK_CDST_CLASSE_PRODUTO", ["id"], { unique: true })
@Entity("CDST_CLASSE_PRODUTO")
export class CdstClasseProduto  {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CLPR_CODIGO", length: 10 })
  public clprCodigo: string;

  @Column("nvarchar", { name: "CLPR_NOME", length: 64 })
  public clprNome: string;

  @Column("smallint", { name: "CLPR_PATRIMONIO", nullable: true })
  public clprPatrimonio: number | null;

  @Column("nvarchar", { name: "CLPR_TIPO", nullable: true, length: 20 })
  public clprTipo: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @OneToMany(() => CdstProduto, (cdstProduto) => cdstProduto.prdtClpr)
  public cdstProdutos: CdstProduto[];

  @OneToMany(() => PecrAfixos, (pecrAfixos) => pecrAfixos.afxsClpr)
  public pecrAfixos: PecrAfixos[];
}
