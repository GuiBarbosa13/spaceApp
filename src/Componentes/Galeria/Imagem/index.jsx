import { MdFavoriteBorder } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import styled from "styled-components";

const FigureEstilizada = styled.figure`
    display: flex;
    flex-direction: column;
    margin:0;
    max-width: calc(50% - 24px);
    width: 100%;
`

const ImagemEstilizada = styled.img`
    min-width: 100%;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
`

const FigCaptionEstilizada = styled.figcaption`
    background-color: #001634;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 20px 20px;

    h3{
        color: #fff;
        font-family: 'GandhiSansBold';
        font-size: 16px;
        margin: 0;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: start;


        p{
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            margin: 0;
            flex-grow: 1;
        }

        div{
            button{
                background-color: transparent;
                border: none;
            }
        }
    }

`


const Imagem = ({foto}) => {
    return(
        <FigureEstilizada>
            <ImagemEstilizada src={foto.path} alt={foto.titulo}/>
            <FigCaptionEstilizada>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <div>
                        <button><MdFavoriteBorder fill="#fff" size={25}/></button>
                        <button><FaExpandArrowsAlt fill="#fff" size={20} /></button>
                    </div>
                    
                </footer>
            </FigCaptionEstilizada>
        </FigureEstilizada>
    )
}

export default Imagem;