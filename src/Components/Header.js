import logo from "../assets/logo.png"
import styled from "styled-components";

export default function Header() {
  return (
    <Logo>
      <img src={logo} />
      <h1>ZapRecall</h1>
    </Logo>
  )
}

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 66%;
    margin-bottom: 59px;
    img{
      width: 54px;
      height: 60px;
    }
    h1{
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #FFFFFF;
      font-family: 'Righteous', cursive;
    }
`