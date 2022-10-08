import styled from 'styled-components';

interface StNavigationLinkInterface {
    key: number;
}

export const StNavigation = styled.nav`
    text-align: center;
    padding: 30px;
`;

export const StNavigationLink = styled.a<StNavigationLinkInterface>`
    color: ${props => props.theme.colors.info};
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.info};
    }
`;

export const StSpanMenu = styled.span`
    margin-left: 10px;
`;