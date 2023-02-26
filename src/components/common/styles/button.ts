import styled from 'styled-components'

export const AuthButtonStyled = styled.button`
    width: 100%;
    height: 58px;
    border-radius: 29px;

    color: #000000;

    ${({ theme }) => theme.fonts.title18};
    background: ${({ theme }) => theme.colors.linear.purple};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
