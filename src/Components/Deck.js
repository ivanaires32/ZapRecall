import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"



export default function Deck({ PerguntasRespostas, setContador, contador }) {
    return (
        <>
            {PerguntasRespostas.map((e, i) => <FlashCards key={e.Q} index={i} Q={e.Q} R={e.R} contador={contador} setContador={setContador} />)}
        </>
    )
}

function FlashCards({ index, Q, R, setContador, contador }) {


    const [pergunta, setPergunta] = useState(false)
    const [resposta, setResposta] = useState(false)
    const [text, setText] = useState(`Pergunta ${index + 1}`)
    const [cor, setCor] = useState("")
    const [icone, setIcone] = useState(setaPlay)
    const [dataTest, setDataTest] = useState("play-btn")
    let background = "#FFFFFF";
    let opacity = "1";
    let tamanho = "65px";
    let display = "block"
    let weight = "700"
    let size = "16"

    if (pergunta !== false) {
        background = "#FFFFD4"
        opacity = "0"
        tamanho = "131px"
        display = "none"
        weight = "400"
        size = "18"
    }

    return (
        <PerguntaSingle data-test="flashcard" background={background} tamanho={tamanho} size={size} weight={weight} >
            <PerguntaId opacity={opacity} display={display}>
                <h2 data-test="flashcard-text" className={cor}>{text}</h2>
                <img data-test={dataTest} onClick={() => mostrarPergunta(setPergunta, setText, Q, icone)}
                    src={icone} />
            </PerguntaId>

            <VirarResposta display={pergunta === true && resposta === false ? "flex" : "none"}>
                <img data-test="turn-btn" onClick={() => mostrarResposta(setResposta, setText, R)} src={setaVirar} />
            </VirarResposta>

            <Lembrei display={pergunta === true && resposta === true ? "flex" : "none"}>
                <NaoLembrei data-test="no-btn" onClick={() => nao(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador)}>Não lembrei</NaoLembrei>
                <QuaseNãoLembrei data-test="partial-btn" onClick={() => quaseNao(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador)} >Quase não lembrei</QuaseNãoLembrei>
                <Zap data-test="zap-btn" onClick={() => zap(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador)}>Zap!</Zap>
            </Lembrei>

        </PerguntaSingle>
    )
}

function mostrarPergunta(setPergunta, setText, Q, icone) {
    if (icone !== setaPlay) {
        return
    }

    setPergunta(true)
    setText(Q)
}

function mostrarResposta(setResposta, setText, R) {
    setResposta(true)
    setText(R)
}

function nao(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador) {
    setPergunta(false)
    setText(`Pergunta ${index + 1}`)
    setCor("erro")
    setIcone(erro)
    setContador(contador + 1)
    setDataTest("no-icon")
}

function quaseNao(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador) {
    setPergunta(false)
    setText(`Pergunta ${index + 1}`)
    setCor("quase")
    setIcone(quase)
    setContador(contador + 1)
    setDataTest("partial-icon")
}

function zap(setDataTest, setPergunta, setText, index, setCor, setIcone, contador, setContador) {
    setPergunta(false)
    setText(`Pergunta ${index + 1}`)
    setCor("certo")
    setIcone(certo)
    setContador(contador + 1)
    setDataTest("zap-icon")
}


const PerguntaSingle = styled.div`
    width: 300px;
    height: ${props => props.tamanho};
    background: ${props => props.background};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: ${props => props.weight};
        font-size: ${props => props.size};
        line-height: 19px;
        color: #333333;
    }
    &:nth-last-child(2){
        margin-bottom: 105px;
    }
`

const PerguntaId = styled.div`
    display: flex;
    margin-top: 18px;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding: 0 15px;
    >img{
        width: 20px;
        height: 23px;
        opacity: ${props => props.opacity};
        display: ${props => props.display};
        cursor: pointer;
    }
    .erro{
        color: #FF3030;
        text-decoration-line: line-through;
    }
    .quase{
       color: #FF922E;
       text-decoration-line: line-through;
    }

    .certo{
        color: #2FBE34;
        text-decoration-line: line-through;
    }
`
const VirarResposta = styled.div`
    display: ${props => props.display};
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    bottom: 45px;
    right: 15px;
    img{
        width: 27px;
    }
    cursor: pointer;
`

const Lembrei = styled.div`
    position: relative;
    bottom: 65px;
    width: 100%;
    display: ${props => props.display};
    justify-content: space-evenly;
    button{
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
    }
`

const NaoLembrei = styled.button`
    background: #FF3030;
`

const QuaseNãoLembrei = styled.button`
    background: #FF922E;
`

const Zap = styled.button`
    background: #2FBE34;
`