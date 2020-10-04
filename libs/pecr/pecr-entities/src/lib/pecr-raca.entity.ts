import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { PecrAfixos } from "./pecr-afixos";
import { PecrCategoria } from "./pecr-categoria";
import { PecrLote } from "./pecr-lote";
import { PecrProdutoBovino } from "./pecr-produto-bovino";
import { PecrEspecie } from "./pecr-especie";
import { VetePorte } from "./vete-porte";
import { VetePelagem } from "./vete-pelagem";
import { VeteAnimal } from "./vete-animal";

@Index("FK_ESPC_RS_RACA", ["racaEspcId"], {})
@Index("FK_PLGM_RS_RACA", ["racaPlgmId"], {})
@Index("FK_PRTE_RS_RACA", ["racaPrteId"], {})
@Index("PK_PECR_RACA", ["racaId"], { unique: true })
@Entity("PECR_RACA")
export class PecrRaca extends BaseEntity {
  @Column("varchar", { primary: true, name: "RACA_ID", length: 27 })
  public racaId: string;

  @Column("varchar", { name: "RACA_ESPC_ID", nullable: true, length: 27 })
  public racaEspcId: string | null;

  @Column("varchar", { name: "RACA_PLGM_ID", nullable: true, length: 27 })
  public racaPlgmId: string | null;

  @Column("varchar", { name: "RACA_PRTE_ID", nullable: true, length: 27 })
  public racaPrteId: string | null;

  @Column("varchar", { name: "RACA_CODIGO", nullable: true, length: 10 })
  public racaCodigo: string | null;

  @Column("varchar", { name: "RACA_NOME", nullable: true, length: 40 })
  public racaNome: string | null;

  @Column("image", { name: "RACA_IMAGEM", nullable: true })
  public racaImagem: Buffer | null;

  @Column("datetime", { name: "RACA_LASTUPDATE", nullable: true })
  public racaLastupdate: LocalDateTime | null;

  @OneToMany(() => PecrAfixos, (pecrAfixos) => pecrAfixos.afxsRaca)
  public pecrAfixos: PecrAfixos[];

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrRaca)
  public pecrCategorias: PecrCategoria[];

  @OneToMany(() => PecrLote, (pecrLote) => pecrLote.loteRaca)
  public pecrLotes: PecrLote[];

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvRaca
  )
  public pecrProdutoBovinos: PecrProdutoBovino[];

  @ManyToOne(() => PecrEspecie, (pecrEspecie) => pecrEspecie.pecrRacas)
  @JoinColumn([{ name: "RACA_ESPC_ID", referencedColumnName: "espcId" }])
  public racaEspc: PecrEspecie;

  @ManyToOne(() => VetePorte, (vetePorte) => vetePorte.pecrRacas)
  @JoinColumn([{ name: "RACA_PRTE_ID", referencedColumnName: "prteId" }])
  public racaPrte: VetePorte;

  @ManyToOne(() => VetePelagem, (vetePelagem) => vetePelagem.pecrRacas)
  @JoinColumn([{ name: "RACA_PLGM_ID", referencedColumnName: "plgmId" }])
  public racaPlgm: VetePelagem;

  @OneToMany(() => VeteAnimal, (veteAnimal) => veteAnimal.anmlRaca)
  public veteAnimals: VeteAnimal[];

  @RelationId((pecrRaca: PecrRaca) => pecrRaca.racaEspc)
  public racaEspcId2: string | null;

  @RelationId((pecrRaca: PecrRaca) => pecrRaca.racaPrte)
  public racaPrteId2: string | null;

  @RelationId((pecrRaca: PecrRaca) => pecrRaca.racaPlgm)
  public racaPlgmId2: string | null;

  public constructor(init?: Partial<PecrRaca>) {
    super();
    Object.assign(this, init);
  }
}
