export class CmnsBairro {
    public id: string;
    public bairNome: string | null;
    public bairNomeAbreviado: string | null;
    public bairCepInicial: string | null;
    public bairCepFinal: string | null;
    public audtDtCreate: LocalDateTime;
    public audtDtUpdate: LocalDateTime | null;
    public audtUsrsCreate: string;
    public audtUsrsUpdate: string | null;
    public audtActive: number;
    public cmnsLocalidade: ICmnsLocalidade;
    public cmnsLogradouros: ICmnsLogradouro[];
    public cmnsPessoaEnderecos: ICmnsPessoaEndereco[];
}
