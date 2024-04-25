import styled from "styled-components"

const LiEstilizado = styled.li`
    color: white;
`;

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return(
        <LiEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} alt={`ícone ${children}`}/>
            <a href="#">{children}</a>
        </LiEstilizado>
    )
}

export default ItemNavegacao