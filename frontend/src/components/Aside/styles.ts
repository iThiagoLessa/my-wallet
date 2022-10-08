import styled from "styled-components";

export const StAsite = styled.aside`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secodary};
    display: flex;
    flex-direction: column;
`;

export const StHeader = styled.header`
    heght: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StLogoText = styled.h1`
    color: ${props => props.theme.colors.white};
    font-size: 25px;
    margin-left: 10px;
`;  

export const StNavigation = styled.nav`
    text-align: center;
`

export const StNavigationLink = styled.a``;