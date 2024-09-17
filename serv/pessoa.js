export  class pessoas{
    constructor(nome,idade,origem){
    this.nome = nome
    this.idade = idade
    this.nascionalidade = origem
    }

visualizar(){
    console.log(this.nome, this.idade,this.nascionalidade)

    return {
        nome:this.nome,
        idade:this.idade,
        regiao:this.nascionalidade
    }
    
}}