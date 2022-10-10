import { StContent } from "./styles";

interface IContentProps {
    children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
    return(
        <StContent>
            {children}
        </StContent>
    )
}

export default Content;