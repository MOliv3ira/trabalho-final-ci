function geradorDeTagsDeIdentificacao(nome) {
  
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 1  
  const adocao = idade >= idadeMinima 
                ? true
                : porte === 'P' 
                ? true
                : false
  return adocao
}

function calcularConsumoDeRacao(nome, idade, peso){
  
  const gramasPorDia = peso * 300 

  return gramasPorDia
}

function decidirTipoDeAtividadePorPorte(porte){

let atividade
  
  switch (porte) {
    case 'pequeno':
      atividade = `brincar dentro de casa`
      break
    case 'médio':
      atividade = `caminhada no quarteirão`
      break 
    case 'grande':
      atividade = `correr no parque`
      break 
    default:
      atividade = `porte inválido`
  }

  return atividade
}

const buscarDados = {
  ex:'Pipoca', 
  ex1:'Pantera'
}

async function buscarDadoAsync(){
  return buscarDados.ex
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}