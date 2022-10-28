import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const Routes: React.FC = () => {

    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default Routes;