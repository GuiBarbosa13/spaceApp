import styled from "styled-components";

const InputEstilizado = styled.input`
border-radius: 10px;
border: solid 2px #C98CF1;
background: transparent;
height: 56px;
min-width: 602px;
padding: 12px 16px;

box-sizing: border-box;

background-image: url('/imagens/search.svg');
background-repeat: no-repeat;
background-size: contain;
background-position: right;

color: #D9D9D9;
font-weight: 400;
font-size: 20px;
line-height: 20px;
`

const CampoTexto = () =>{
    return(
        <InputEstilizado placeholder="O que você procura?"></InputEstilizado>
    )
}

export default CampoTexto;