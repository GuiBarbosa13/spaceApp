import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

import { IoCloseCircleOutline } from "react-icons/io5";


const Overlay = styled.div`
    background-color: #0000007b;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizada = styled.dialog`
    position: absolute;
    top: 294px;
    width: 800px;
    padding: 0;
    border: none;
    background-color: transparent;

    form{
        position: absolute;
        top: 15px;
        right: 15px;

        button{
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
        }
    }
`


const ModalDeZoom = ({ foto, aoFechar, aoAlternarFavorito}) => {

    return (
        <>
            {foto && <>
                <Overlay onClick={aoFechar}/>

                <DialogEstilizada open={!!foto} onClose={aoFechar}>
                    
                    <Imagem foto={foto} expandida={true} aoFavoritar={aoAlternarFavorito}/>
                    
                    <form method="dialog">
                        <button><IoCloseCircleOutline color="fff" size={40}/></button>
                    </form>
                    
                </DialogEstilizada>
            </>}
        </>
    )
}

export default ModalDeZoom