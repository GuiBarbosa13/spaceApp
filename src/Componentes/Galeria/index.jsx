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




const Galeria = ({fotos = [], aoFotoSelecionada, aoFavoritar, aoClicarTag, tagClicada}) => {
    const fotoFiltrada = fotos.filter(foto => foto.tagId === tagClicada.id);
    const filtro = tagClicada.id === 0 ? fotos : fotoFiltrada;
    
    return (
        <>
            <Tags aoClicarTag = {aoClicarTag}/>
            
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo alinhamento = "left">
                        Navegue pela Galeria
                    </Titulo>
                    <SecaoFotos>
                          
                          {filtro.map(foto => <Imagem aoZoomSolicitado = {aoFotoSelecionada} foto={foto} key={foto.id} expandida={false} aoFavoritar={aoFavoritar}/>)}
                        
                        {/* {fotos.map(foto => <Imagem aoZoomSolicitado = {aoFotoSelecionada} foto={foto} key={foto.id} expandida={false} aoFavoritar={aoFavoritar}/>)} */}
                    </SecaoFotos>
                    
                </SecaoFluida>

                <Populares/>
            </GaleriaContainer>
        
        </>
    )
};

export default Galeria;