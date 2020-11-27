import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import PecrAfixos from "./pecr-afixos";
import PecrCategoria from "./pecr-categoria";
import PecrLote from "./pecr-lote";
import PecrProdutoBovino from "./pecr-produto-bovino";
import PecrEspecie from "./pecr-especie";
import VetePelagem from "./vete-pelagem";
import VetePorte from "./vete-porte";
import VeteAnimal from "./vete-animal";

@Index("PK_PECR_RACA", ["id"], { unique: true })
@Entity("PECR_RACA")
export default class PecrRaca {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "RACA_CODIGO", nullable: true, length: 10 })
  public racaCodigo?: string | null;

  @Column("nvarchar", { name: "RACA_NOME", nullable: true, length: 40 })
  public racaNome?: string | null;

  @Column("nvarchar", { name: "RACA_IMAGEM", nullable: true })
  public racaImagem?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @OneToMany(() => PecrAfixos, (pecrAfixos) => pecrAfixos.afxsRaca)
  public pecrAfixos?: PecrAfixos[];

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrRaca)
  public pecrCategorias?: PecrCategoria[];

  @OneToMany(() => PecrLote, (pecrLote) => pecrLote.loteRaca)
  public pecrLotes?: PecrLote[];

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvRaca
  )
  public pecrProdutoBovinos?: PecrProdutoBovino[];

  @ManyToOne(() => PecrEspecie, (pecrEspecie) => pecrEspecie.pecrRacas)
  @JoinColumn([{ name: "RACA_ESPC_ID", referencedColumnName: "id" }])
  public racaEspc?: PecrEspecie;

  @ManyToOne(() => VetePelagem, (vetePelagem) => vetePelagem.pecrRacas)
  @JoinColumn([{ name: "RACA_PLGM_ID", referencedColumnName: "id" }])
  public racaPlgm?: VetePelagem;

  @ManyToOne(() => VetePorte, (vetePorte) => vetePorte.pecrRacas)
  @JoinColumn([{ name: "RACA_PRTE_ID", referencedColumnName: "id" }])
  public racaPrte?: VetePorte;

  @OneToMany(() => VeteAnimal, (veteAnimal) => veteAnimal.anmlRaca)
  public veteAnimals?: VeteAnimal[];
}
