import styled from "styled-components"
import EstilosGlobais from "./Componentes/estilos globais";
import Cabecalho from "./Componentes/Cabecalho";

const FundoGradiente = styled.div`

background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
img{
  max-width: 212px;
}

`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
    </FundoGradiente>
  )
}

export default App
