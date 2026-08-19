// useState é a "ferramenta" do React que dá MEMÓRIA a um componente.
import { useState } from 'react'

// CartaoFilme mostra UM único filme, recebido de fora pelas props.
function CartaoFilme({ filme, mostrarAno, setMostrarAno}) {
  // ESTADO (useState)
  // -----------------
  // "assistido" guarda o valor atual (começa igual ao filme.assistido).
  // "setAssistido" é a única forma correta de mudar esse valor.
  // Deixamos o estado aqui dentro para cada cartão cuidar do seu próprio botão.
  const [assistido, setAssistido] = useState(filme.assistido)
  const [curtida, setCurtida] = useState(0);
  // Inverte o valor: se era true vira false, se era false vira true.
  function alternarAssistido() {
    setAssistido(!assistido)
  }

  function alternarAno() {
    setMostrarAno(!mostrarAno)
  }

  return (
    <div className="cartao">
      <h2 className="cartao-titulo">{filme.titulo}</h2>
      <p className='cartao-ano'>Autor: {filme.autor}</p>
      {mostrarAno &&(
        <p className="cartao-ano">Ano: {filme.ano}</p>
      )}
      <p className='cartao-ano'>Curtidas: {curtida}</p>

      {/* Mostramos um texto diferente dependendo do estado "assistido". */}
      <p className="cartao-status">
        {assistido ? 'Assistido' : 'Não assistido'}
      </p>

      {/* Ao clicar, chamamos a função que muda o estado. */}
      <button className="cartao-botao" onClick={alternarAssistido}>
        Marcar como {assistido ? 'não assistido' : 'assistido'}
      </button>

      <button className='cartao-botao' onClick={() => {setCurtida(curtida +1)}}>
        Curtidas
      </button>

      <button
        className="cartao-botao"
        onClick={alternarAno}
      >
        {mostrarAno ? 'Esconder ano' : 'Mostrar ano'}
      </button>
    </div>
  )
}

export default CartaoFilme
