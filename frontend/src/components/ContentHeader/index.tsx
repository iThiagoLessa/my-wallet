import SelectInput from "../SelectInput";
import { StHeader } from "./styles";

interface IContentHeader {
    title: string;
}

const ContentHeader: React.FC<IContentHeader> = ({
    title
}) => {
    return (
        <>
            <StHeader>
                <h3>{title}</h3>
            </StHeader>
            <SelectInput />
        </>
    )
}

export default ContentHeader;