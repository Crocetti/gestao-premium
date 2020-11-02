import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { MenuSistemaModulo } from "./menu-sistema-modulo";
import { SstmParametroSistema } from "./sstm-parametro-sistema";
import { SstmSistemaCorporacao } from "./sstm-sistema-corporacao";
import { SstmSistemaTabela } from "./sstm-sistema-tabela";
import { SstmSistemaVersao } from "./sstm-sistema-versao";

@Index("PK_SSTM_SISTEMA", ["sstmId"], { unique: true })
@Entity("SSTM_SISTEMA")
export class SstmSistema extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSTM_ID", length: 27 })
  public sstmId: string;

  @Column("varchar", { name: "SSTM_NAME", nullable: true, length: 64 })
  public sstmName: string | null;

  @Column("image", { name: "SSTM_ICONE", nullable: true })
  public sstmIcone: Buffer | null;

  @Column("image", { name: "SSTM_LOGO", nullable: true })
  public sstmLogo: Buffer | null;

  @Column("varchar", { name: "SSTM_SKIN", nullable: true, length: 64 })
  public sstmSkin: string | null;

  @Column("datetime", { name: "SSTM_LASTUPDATE", nullable: true })
  public sstmLastupdate: LocalDateTime | null;

  @OneToMany(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.ssmdSstm
  )
  public menuSistemaModulos: MenuSistemaModulo[];

  @OneToMany(
    () => SstmParametroSistema,
    (sstmParametroSistema) => sstmParametroSistema.prssSstm
  )
  public sstmParametroSistemas: SstmParametroSistema[];

  @OneToMany(
    () => SstmSistemaCorporacao,
    (sstmSistemaCorporacao) => sstmSistemaCorporacao.sscpSstm
  )
  public sstmSistemaCorporacaos: SstmSistemaCorporacao[];

  @OneToMany(
    () => SstmSistemaTabela,
    (sstmSistemaTabela) => sstmSistemaTabela.sstbSstm
  )
  public sstmSistemaTabelas: SstmSistemaTabela[];

  @OneToMany(
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.ssvsSstm
  )
  public sstmSistemaVersaos: SstmSistemaVersao[];

  public constructor(init?: Partial<SstmSistema>) {
    super();
    Object.assign(this, init);
  }
}
