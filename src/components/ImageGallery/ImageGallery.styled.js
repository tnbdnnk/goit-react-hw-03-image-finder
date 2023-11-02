import styled from 'styled-components';

export const ImgList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${props => props.theme.spacing(8)};
`;