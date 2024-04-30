import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const SecaoFotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`




const Galeria = ({fotos = []}) => {
    return (
        <>
            <Tags/>
            
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo alinhamento = "left">
                        Navegue pela Galeria
                    </Titulo>
                    <SecaoFotos>
                        {fotos.map(foto => <Imagem foto={foto} key={foto.id}/>)}
                    </SecaoFotos>
                    
                </SecaoFluida>

                <Populares/>
            </GaleriaContainer>
        
        </>
    )
};

export default Galeria;