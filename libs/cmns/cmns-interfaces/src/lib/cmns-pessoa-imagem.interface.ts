import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("FK_PESS_RS_PSIM", ["psimPessId"], {})
@Index("PK_CMNS_PESSOA_IMAGEM", ["psimId"], { unique: true })
@Entity("CMNS_PESSOA_IMAGEM")
export class CmnsPessoaImagem extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSIM_ID", length: 27 })
  public psimId: string;

  @Column("varchar", { name: "PSIM_PESS_ID", nullable: true, length: 27 })
  public psimPessId: string | null;

  @Column("varchar", { name: "PSIM_TIPO", nullable: true, length: 12 })
  public psimTipo: string | null;

  @Column("image", { name: "PSIM_IMAGEM", nullable: true })
  public psimImagem: Buffer | null;

  @Column("datetime", { name: "PSIM_LASTUPDATE", nullable: true })
  public psimLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaImagems)
  @JoinColumn([{ name: "PSIM_PESS_ID", referencedColumnName: "pessId" }])
  public psimPess: CmnsPessoa;

  @RelationId((cmnsPessoaImagem: CmnsPessoaImagem) => cmnsPessoaImagem.psimPess)
  public psimPessId2: string | null;

  public constructor(init?: Partial<CmnsPessoaImagem>) {
    super();
    Object.assign(this, init);
  }
}
