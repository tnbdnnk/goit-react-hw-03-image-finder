import styled from 'styled-components';

export const Item = styled.li`
    flex-basis: calc((100% - 56px) / 3);    
`;

export const Img = styled.img`
    width: 420px;
    height: 260px;
    border-radius: 10px;
    transition: 450ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`;