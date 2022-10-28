import { Route, Switch } from "react-router-dom";
import Content from "../components/Content";
import Dashboard from "../views/Dashboard";
import List from "../views/List";

const AppRoutes = () => (
    <Content>
        <Switch>
            <Route path="/dashboard" component={Dashboard}  />
            <Route path="/list/:type" exact component={List}  />
        </Switch>
    </Content>
)


export default AppRoutes;