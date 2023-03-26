import logo from "../assets/logo.png"
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components"
import { useState } from "react";

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


export default function Start({ setStartGame }) {
    return (
        <MenuStart>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={setStartGame(<Comecar />)}>Iniciar Recall!</button>
        </MenuStart>
    )
}

function Comecar() {
    const [contador, setContador] = useState(0)
    return (
        <>
            <Header />
            <Deck contador={contador} setContador={setContador} PerguntasRespostas={PerguntasRespostas} />
            <Footer contador={contador} PerguntasRespostas={PerguntasRespostas} />
        </>
    )
}

const MenuStart = styled.div`
    height: 350px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
        width: 136px;
        height: 161px;
    }
    h1{
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #D70900;
    }
`