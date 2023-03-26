import { useState } from "react";
import styled from "styled-components";
import Deck from "./Components/Deck";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const PerguntasRespostas = [
  { Q: "Em qual ano foi oficializado o clube de Desbravadores", R: "1950" },
  { Q: "O triangulo, escudo e espada correspondem a ...", R: "Trindade, Fé e Biblia" },
  { Q: "Os 4 As do maratana correspondem a ...", R: "amar, anunciar, apressar e aguardar a volta de Cristo" },
  { Q: "O clube de Desbravadores tem 5 cores, verdadeiro ou falso?", R: "Falso" },
  { Q: "O amarelo no Clube de Desbravadores signidica ...", R: "Excelencia dos ideais" },
  { Q: "O azul no Clube de Desbravadores signidica ...", R: "Lealdade" },
  { Q: "O branco no Clube de Desbravadores signidica ...", R: "Pureza" },
  { Q: "O vermelho no Clube de Desbravadores signidica ...", R: "Sangue de Cristo" },
  { Q: "Qual pastor foi responsavel pela composição do hino dos Desbravadores", R: "Henry Berg" },
  { Q: "Qual pastor foi responsavel pela elaboração do triangulo dos Desbravadores", R: "Jhon Hancock" },
  { Q: "Qual pastor foi responsavel pela elaboração da bandeira dos Desbravadores", R: "Henry Berg" },
  { Q: "Quais são os 10° livro do antigo testamento e 8° livro do novo testamento", R: "2° Samuel e Gálatas" },

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