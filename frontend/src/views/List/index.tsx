import { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import { StEntriesSection } from "./styles";

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entradas' ? 'Entradas' : 'Saídas';
    }, [type]);

    return (
        <StEntriesSection>
            <ContentHeader title={title} />
        </StEntriesSection>
    )
}

export default List;