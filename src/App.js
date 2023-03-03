import { useState } from "react";
import styled from "styled-components";
import Deck from "./Components/Deck";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const PerguntasRespostas = [
  { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
  { Q: "O React é ...", R: "uma biblioteca JavaScript para construção de interfaces" },
  { Q: "Componentes devem iniciar com ...", R: "letra maiúscula" },
  { Q: "Podemos colocar ... dentro do JSX", R: "expressões" },
  { Q: "O ReactDOM nos ajuda ...", R: "interagindo com a DOM para colocar componentes React na mesma" },
  { Q: "Usamos o npm para ...", R: "gerenciar os pacotes necessários e suas dependências" },
  { Q: "Usamos props para ...", R: "passar diferentes informações para componentes" },
  { Q: "Usamos estado (state) para", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function App() {
  const [contador, setContador] = useState(0)
  return (
    <Container>
      <Header />
      <Deck contador={contador} setContador={setContador} PerguntasRespostas={PerguntasRespostas} />
      <Footer contador={contador} PerguntasRespostas={PerguntasRespostas} />
    </Container>
  )
}

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
`