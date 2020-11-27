import { Column, Entity, Index, OneToMany } from "typeorm";
import MenuSistemaModulo from "./menu-sistema-modulo";
import SstmParametroSistema from "./sstm-parametro-sistema";
import SstmSistemaCorporacao from "./sstm-sistema-corporacao";
import SstmSistemaTabela from "./sstm-sistema-tabela";
import SstmSistemaVersao from "./sstm-sistema-versao";

@Index("PK_SSTM_SISTEMA", ["id"], { unique: true })
@Entity("SSTM_SISTEMA")
export default class SstmSistema {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "SSTM_NAME", nullable: true, length: 64 })
  public sstmName?: string | null;

  @Column("nvarchar", { name: "SSTM_ICONE", nullable: true })
  public sstmIcone?: string | null;

  @Column("nvarchar", { name: "SSTM_LOGO", nullable: true })
  public sstmLogo?: string | null;

  @Column("nvarchar", { name: "SSTM_SKIN", nullable: true, length: 64 })
  public sstmSkin?: string | null;

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

  @OneToMany(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.ssmdSstm
  )
  public menuSistemaModulos?: MenuSistemaModulo[];

  @OneToMany(
    () => SstmParametroSistema,
    (sstmParametroSistema) => sstmParametroSistema.prssSstm
  )
  public sstmParametroSistemas?: SstmParametroSistema[];

  @OneToMany(
    () => SstmSistemaCorporacao,
    (sstmSistemaCorporacao) => sstmSistemaCorporacao.sscpSstm
  )
  public sstmSistemaCorporacaos?: SstmSistemaCorporacao[];

  @OneToMany(
    () => SstmSistemaTabela,
    (sstmSistemaTabela) => sstmSistemaTabela.sstbSstm
  )
  public sstmSistemaTabelas?: SstmSistemaTabela[];

  @OneToMany(
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.ssvsSstm
  )
  public sstmSistemaVersaos?: SstmSistemaVersao[];
}
