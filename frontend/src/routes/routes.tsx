import { Route, Switch } from "react-router-dom";
import Content from "../components/Content";
import Dashboard from "../views/Dashboard";
import Entries from "../views/Entries";

const AppRoutes = () => (
    <Content>
        <Switch>
            <Route path="/dashboard" component={Dashboard}  />
            <Route path="/list/:type" exact component={Entries}  />
        </Switch>
    </Content>
)


export default AppRoutes;