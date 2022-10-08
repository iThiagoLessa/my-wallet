import { Switch } from "@material-ui/core";
import { StSpan, StToggleContent } from "./styles";

interface IToggleSwitch {
    textChecked: string;
    textUnchecked: string;
}


const ToggleSwitch: React.FC<IToggleSwitch> = ({
    textChecked,
    textUnchecked
}) => {
    return (
        <StToggleContent>
            <StSpan>{textChecked}</StSpan>
            <Switch />
            <StSpan>{textUnchecked}</StSpan>
        </StToggleContent>
    )
}

export default ToggleSwitch;