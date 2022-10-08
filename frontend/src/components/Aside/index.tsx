import { StAsite, StHeader, StLogoText } from "./styles";
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import MenuNavigation from "./components/MenuNavigation";
import MenuItems from "./utils/MenuItems";

const Aside = () => {
   
    return (
        <StAsite>

            <StHeader>
                <MonetizationOnRoundedIcon />
                <StLogoText>Minha Carteira</StLogoText>
            </StHeader>

            <MenuNavigation
                MenuItems={MenuItems}
            />

        </StAsite>
    )
}

export default Aside;