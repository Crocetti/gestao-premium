import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa.entity";
import type { ICmnsPessoa, ICmnsPessoaImagem } from '@gpremium/cmns-interfaces';

@Index("PK_CMNS_PESSOA_IMAGEM", ["id"], { unique: true })
@Entity("CMNS_PESSOA_IMAGEM")
export class CmnsPessoaImagem extends BasicEntity implements ICmnsPessoaImagem {

  @Column("nvarchar", { name: "PSIM_TIPO", nullable: true, length: 12 })
  public psimTipo: string | null;

  @Column("nvarchar", { name: "PSIM_IMAGEM", nullable: true })
  public psimImagem: string | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaImagems)
  @JoinColumn([{ name: "PSIM_PESS_ID", referencedColumnName: "id" }])
  public cmnsPessoa: ICmnsPessoa;

}
