import styled from "styled-components"
import EstilosGlobais from "./Componentes/estilos globais";
import Cabecalho from "./Componentes/Cabecalho";
import BarraLateral from "./Componentes/BarraLateral";
import Banner from "./Componentes/Banner";
import Galeria from "./Componentes/Galeria";
import Fotos from "./fotos.json";
import { useState } from "react";
import ModalDeZoom from "./Componentes/ModalDeZoom";


const FundoGradiente = styled.div`

background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
img{
  max-width: 212px;
}
`;

const AppContainer = styled.div`
  width: 1180px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, SetFotosDaGaleria] = useState(Fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>

        <Cabecalho/>

        <MainContainer>
          <BarraLateral/>

          <ConteudoGaleria>

          <Banner/>
          <Galeria aoFotoSelecionada = {foto => setFotoSelecionada(foto)} fotos = {fotosDaGaleria}/>
          
          </ConteudoGaleria>

        </MainContainer>
          
      </AppContainer>

      <ModalDeZoom foto={fotoSelecionada}/>
      </FundoGradiente>
  )
}

export default App
