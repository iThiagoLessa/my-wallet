import { StAsite, StHeader, StLogoText, StNavigation, StNavigationLink } from "./styles";
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';

const Aside = () => {
    return (
        <StAsite>
            <StHeader>
                <MonetizationOnRoundedIcon />
                <StLogoText>Minha Carteira</StLogoText>
            </StHeader>

            <StNavigation>
                <StNavigationLink>Dashboard</StNavigationLink>
            </StNavigation>
        </StAsite>
    )
}

export default Aside;