import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CdstProdutorPropriedade } from "./cdst-produtor-propriedade";
import { CmnsPessoa } from "./cmns-pessoa";
import { PecrAfixos } from "./pecr-afixos";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("PK_CDST_PRODUTOR_RURAL", ["id"], { unique: true })
@Entity("CDST_PRODUTOR_RURAL")
export class CdstProdutorRural {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

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

  @OneToMany(
    () => CdstProdutorPropriedade,
    (cdstProdutorPropriedade) => cdstProdutorPropriedade.pdppPdrr
  )
  public cdstProdutorPropriedades: CdstProdutorPropriedade[];

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstProdutorRurals)
  @JoinColumn([{ name: "PDRR_PESS_ID", referencedColumnName: "id" }])
  public pdrrPess: CmnsPessoa;

  @OneToMany(() => PecrAfixos, (pecrAfixos) => pecrAfixos.afxsPdrr)
  public pecrAfixos: PecrAfixos[];

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvCrdr
  )
  public pecrProdutoBovinos: PecrProdutoBovino[];

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvPdrr
  )
  public pecrProdutoBovinos2: PecrProdutoBovino[];
}
