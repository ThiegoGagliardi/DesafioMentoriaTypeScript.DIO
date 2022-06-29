enum Profissao{    
    Atriz,
    Padeiro,    
}

class Person  {
    public nome?: String;  
    public idade?: number; 
    public profissao?: Profissao;
}

let pessoa1 = new Person();
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2 = new Person();
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;


let pessoa3: {nome: string, idade: number, profissao: Profissao} = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4 = {
    nome : "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}