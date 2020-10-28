import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { CmnsPessoaEmail } from './cmns-pessoa-email.entity';
import { CmnsPessoaEndereco } from './cmns-pessoa-endereco.entity';
import { CmnsPessoaFisica } from './cmns-pessoa-fisica.entity';
import { CmnsPessoaImagem } from './cmns-pessoa-imagem.entity';
import { CmnsPessoaJuridica } from './cmns-pessoa-juridica.entity';
import { CmnsPessoaTelefone } from './cmns-pessoa-telefone.entity';
import type { ICmnsPessoa, ICmnsPessoaEmail, ICmnsPessoaEndereco, ICmnsPessoaFisica, ICmnsPessoaImagem, ICmnsPessoaJuridica, ICmnsPessoaTelefone, ICmnsPessoaDocumento, ICmnsUsuario } from '@gpremium/cmns-interfaces';
import { CmnsPessoaDocumento } from './cmns-pessoa-documento.entity';

@Index('PK_CMNS_PESSOA', ['id'], { unique: true })
@Entity('CMNS_PESSOA')
export class CmnsPessoa extends BasicEntity implements ICmnsPessoa {
    @Column('nvarchar', { name: 'PESS_CODIGO', nullable: true, length: 10 })
    public pessCodigo: string | null;

    @Column('nvarchar', { name: 'PESS_CPF_CNPJ', nullable: true, length: 18 })
    public pessCpfCnpj: string | null;

    @Column('nvarchar', { name: 'PESS_NOME', nullable: true, length: 128 })
    public pessNome: string | null;

    @Column('nvarchar', {
        name: 'PESS_FISICA_JURIDICA',
        nullable: true,
        length: 10,
    })
    public pessFisicaJuridica: string | null;

    @Column('nvarchar', { name: 'PESS_OBSERVACAO', nullable: true })
    public pessObservacao: string | null;

    @Column('nvarchar', { name: 'PESS_URL', nullable: true, length: 256 })
    public pessUrl: string | null;

    @Column('nvarchar', {
        name: 'PESS_RELACIONAMENTO',
        nullable: true,
        length: 256,
    })
    public pessRelacionamento: string | null;

    @OneToOne(
        () => CmnsPessoaFisica,
        (cmnsPessoaFisica) => cmnsPessoaFisica.cmnsPessoa
    )
    public cmnsPessoaFisica: ICmnsPessoaFisica;

    @OneToOne(
        () => CmnsPessoaJuridica,
        (cmnsPessoaJuridica) => cmnsPessoaJuridica.cmnsPessoa
    )
    public cmnsPessoaJuridica?: ICmnsPessoaJuridica;

    @OneToMany(
        () => CmnsPessoaDocumento,
        (cmnsPessoaDocumento) => cmnsPessoaDocumento.cmnsPessoa
    )
    public cmnsPessoaDocumentos: ICmnsPessoaDocumento[];

    @OneToMany(
        () => CmnsPessoaEmail,
        (cmnsPessoaEmail) => cmnsPessoaEmail.cmnsPessoa
    )
    public cmnsPessoaEmails: ICmnsPessoaEmail[];

    @OneToMany(
        () => CmnsPessoaEndereco,
        (cmnsPessoaEndereco) => cmnsPessoaEndereco.cmnsPessoa
    )
    public cmnsPessoaEnderecos: ICmnsPessoaEndereco[];


    @OneToMany(
        () => CmnsPessoaImagem,
        (cmnsPessoaImagem) => cmnsPessoaImagem.cmnsPessoa
    )
    public cmnsPessoaImagems: ICmnsPessoaImagem[];

    @OneToMany(
        () => CmnsPessoaTelefone,
        (cmnsPessoaTelefone) => cmnsPessoaTelefone.cmnsPessoa
    )
    public cmnsPessoaTelefones: ICmnsPessoaTelefone[];

}
