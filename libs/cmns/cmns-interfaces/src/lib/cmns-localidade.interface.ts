import { LocalDateTime } from '@js-joda/core';

export class CmnsLocalidade {
  public lcldId: string;
  public lcldUnfdId: string ;
  public lcldNrIbge: string ;
  public lcldNome: string ;
  public lcldCep: string ;
  public lcldNomeAbrev: string;
  public lcldCepInicial: string;
  public lcldCepFinal: string;
  public lcldLastupdate: LocalDateTime;
  public cmnsUnFd: CmnsUnidadeFederativa;

  @RelationId((cmnsLocalidade: CmnsLocalidade) => cmnsLocalidade.lcldUnfd)
  public lcldUnfdId2: string | null;

  public constructor(init?: Partial<CmnsLocalidade>) {
    super();
    Object.assign(this, init);
  }
}
