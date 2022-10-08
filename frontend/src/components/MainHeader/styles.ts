import styled from "styled-components";

export const StMainHeader = styled.div`
    grid-area: MH;
    padding: 30px;
    background-color: ${props => props.theme.colors.secodary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StContainerUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const StWelcome = styled.h6`
    font-weight: bolder;
    margin: 0;
    font-size: 28px;
`;

export const UserName = styled.p`
    font-size: 16px;
    margin: 0;
`;