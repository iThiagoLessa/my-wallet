import styled from "styled-components";

export const StHeader = styled.header`
    
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
    
    > h3 {
        margin: 0 0 10px;
        font-size: 36px;
        color: ${props => props.theme.colors.white};
    }
`;