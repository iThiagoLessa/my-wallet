import { ChangeEvent } from "react";

import { Switch } from "@material-ui/core";
import { StSpan, StToggleContent } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setThemeSelected } from "../../store/reducers/themeReducers";
import { IThemeSelected } from "../../globalInterfaces";

interface IToggleSwitch {
    textChecked: string;
    textUnchecked: string;
}


const ToggleSwitch: React.FC<IToggleSwitch> = ({
    textChecked,
    textUnchecked
}) => {
    const dispatch = useDispatch();

    const { themeSelected } = useSelector((state: IThemeSelected) => state);

    const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setThemeSelected(e.target.checked));
    }

    return (
        <StToggleContent>
            <StSpan>{textChecked}</StSpan>
            <Switch onChange={handleSwitch} checked={themeSelected.darkTheme} />
            <StSpan>{textUnchecked}</StSpan>
        </StToggleContent>
    )
}

export default ToggleSwitch;