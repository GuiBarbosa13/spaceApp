import styled from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderEstlizado = styled.header`
padding: 60px 0;
display: flex;
justify-content: space-between;
`

const Cabecalho = ({setFiltro}) =>{
    return (
        <HeaderEstlizado>
            <img src="/imagens/logo.png" alt="Logo SpaceApp"/>
            <CampoTexto setFiltro = {setFiltro}/>
        </HeaderEstlizado>
    )
}

export default Cabecalho;