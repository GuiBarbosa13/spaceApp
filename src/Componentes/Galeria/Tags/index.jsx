import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    color: #FFF;
    font-size: 24px;
    font-weight: 400;
    `;

const BotoesConatiner = styled.ul`
    display: flex;
    gap: 24px;
`;

const BotaoEstlizado = styled.button`
    display: inline-block;
    background-color: #d9d9d930;
    color: #FFF;
    border: solid 2px transparent;
    border-radius: 10px;
    padding: 10px 8px;
    font-size: 24px;
    font-weight: 400;

    box-sizing: border-box;

    transition: background-color 0.3s ease;

    cursor: pointer;

    &:hover{
        border-color: #C98CF1;
        background-color: #d9d9d940;
    }
    `;

const Tags = ({aoClicarTag}) => {
    return(
        <TagsContainer>  
            <p>Busque por tags:</p>
            
            <BotoesConatiner>
            {tags.map(tag => <BotaoEstlizado key={tag.id} onClick={() => aoClicarTag(tag)}>{tag.titulo}</BotaoEstlizado>)}
            </BotoesConatiner>
        </TagsContainer>

        
        
    )
}

export default Tags