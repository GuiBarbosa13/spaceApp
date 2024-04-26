import styled from "styled-components";


const DivEstilizada = styled.div`
    background-image: url("/imagens/banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 328px;
    border-radius: 20px;
    display: flex;
    flex-grow: 1;
    margin: 0;
    align-items: center;
    max-width: 100%;

    h3{
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        color: #FFF;
        font-family: 'GandhiSansRegular';
        max-width: 300px;
        padding: 0 64px;
    }
`

const Banner = () => {
    return(
            <DivEstilizada>
                <h3>A galeria mais<br/>completa de<br/>fotos do espaço!</h3>
            </DivEstilizada>
    )
}

export default Banner