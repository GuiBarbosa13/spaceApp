import Titulo from "../../Titulo";

import Fotos from "../../../fotos.json"
import styled from "styled-components";

const PopularesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const FotosContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 24px;
    gap: 24px;
`

const FotoEstilizada = styled.img`
    border-radius: 24px;
`

const VerMais = styled.button`
    border: solid 2px #C98CF1;
    border-radius: 12px;
    padding: 14px;
    color: #fff;
    font-size: 20px;
    background-color: transparent;
`

const fotosPopulares = Fotos.map(foto => foto).slice(1,5);



const Populares = () => {
    return (
        <PopularesContainer>
            <Titulo alinhamento="center">Populares</Titulo>

            <FotosContainer>
                {fotosPopulares.map(foto => <FotoEstilizada src={foto.path} key= {foto.id} alt={foto.titulo}/>)}
                <VerMais>Ver mais</VerMais>
            </FotosContainer>
            
        </PopularesContainer>
       
       
    )
}

export default Populares;