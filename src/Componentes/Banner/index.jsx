import styled from "styled-components";


const DivEstilizada = styled.div`
    background-image: url("/imagens/banner.png");
    background-size: cover;
    height: 328px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding-left: 64px;
    width: 100%;

    h3{
        font-weight: 400;
        font-size: 40px;
        color: #FFF;
        font-family: 'GandhiSansRegular';
        margin: 0;
        box-sizing: border-box;
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