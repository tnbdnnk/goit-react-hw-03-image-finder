import styled from 'styled-components';

export const Header = styled.header`
    background-color: #77a19f;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 40px;
`;

export const Input = styled.input`
    display: block;

    width: 520px;
    height: 40px;

    border: 2px solid #2f4543;
    border-radius: 10px;
    padding: 10px 80px;
    background-color: ${props => props.theme.colors.inputField};
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.35),
        0 2px 0 rgba(255, 255, 255, 0.15);
    outline: none;
    transition: border 300ms;

    font-weight: 400;
    font-size: 25px;

    line-height: 1.16;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.white};

    &:focus {
        border: 2px solid #496361;
    }

    &::placeholder {
        font-size: 25px;
        letter-spacing: 0.02em;
        color: #f8efeff5;
    }
`;

export const FormWrapper = styled.form`
    position: relative;
`;

export const BtnSearch = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;

    outline: none;
    border: none;
    background-color: transparent;

    svg {
        display: block;
        color: #f8efeff5;
    }
`;