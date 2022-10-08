
import ToggleSwitch from "../ToggleSwitch";
import { StContainerUser, StWelcome, StMainHeader } from "./styles";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';

const MainHeader = () => {
    return (
        <StMainHeader>

            <ToggleSwitch
                textChecked="light"
                textUnchecked="dark"
            />

            <StContainerUser>
                <StWelcome>Olá, <EmojiEmotionsRoundedIcon /></StWelcome>
                <span>Thiago Lessa</span>
            </StContainerUser>
        </StMainHeader>
    )
}

export default MainHeader;