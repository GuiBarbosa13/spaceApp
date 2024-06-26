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




const Galeria = ({fotos = [], setTag, aoFotoSelecionada, aoFavoritar}) => {
    
    return (
        <>
            <Tags setTag = {setTag}/>
            
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo alinhamento = "left">
                        Navegue pela Galeria
                    </Titulo>
                    <SecaoFotos>                        
                        {fotos.map(foto => <Imagem aoZoomSolicitado = {aoFotoSelecionada} foto={foto} key={foto.id} aoFavoritar={aoFavoritar} expandida={false}/>)}
                    </SecaoFotos>
                    
                </SecaoFluida>

                <Populares/>
            </GaleriaContainer>
        
        </>
    )
};

export default Galeria;