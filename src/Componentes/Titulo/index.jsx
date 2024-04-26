import styled from "styled-components";

const TituloEstilizado = styled.h2`
    color: #7B78E5;
    font-size: 32px;
    font-weight: 400;

    text-align: ${props => {props.alinhamento}};

`

const Titulo = ({children, alinhamento})=>{
    return(
        <TituloEstilizado $alinhamento={alinhamento}>{children}</TituloEstilizado>
    )
}

export default Titulo;