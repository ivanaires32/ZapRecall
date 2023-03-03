import styled from "styled-components";

export default function Footer({ PerguntasRespostas, contador }) {
    return (
        <ContainerFooter data-test="footer">
            <h2>{contador}/{PerguntasRespostas.length} CONCLUÍDOS</h2>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 75px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`