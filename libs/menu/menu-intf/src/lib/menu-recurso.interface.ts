import { BasicInterface } from '@gpremium/shared-int';

export interface IMenuRecurso extends BasicInterface {
  public rcrsNome?: string;
  public rcrsDescricao?: string | null;
  public rcrsUrl?: string | null;
  public rcrsClasse?: string | null;
  public rcrsPackage?: string | null;
  public rcrsMethod?: string | null;
  public rcrsParams?: string | null;
  public rcrsSmallIcon?: string | null;
  public rcrsNormalIcon?: string | null;
  public rcrsLargeIcon?: string | null;
  public rcrsPsta?: MenuPasta;
  public menuSistemaRecursos?: MenuSistemaRecurso[];
}

export class MenuRecurso {
  public rcrsNome?: string;
  public rcrsDescricao?: string | null;
  public rcrsUrl?: string | null;
  public rcrsClasse?: string | null;
  public rcrsPackage?: string | null;
  public rcrsMethod?: string | null;
  public rcrsParams?: string | null;
  public rcrsSmallIcon?: string | null;
  public rcrsNormalIcon?: string | null;
  public rcrsLargeIcon?: string | null;
  public rcrsPsta?: MenuPasta;
  public menuSistemaRecursos?: MenuSistemaRecurso[];
}
