import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

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
`

const ModalDeZoom = ({ foto }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizada open={!!foto}>
                    <Imagem foto={foto} />
                    <form method="dialog">
                        <button type="submit">ok</button>
                    </form>
                </DialogEstilizada>

            </>}
        </>
    )
}

export default ModalDeZoom