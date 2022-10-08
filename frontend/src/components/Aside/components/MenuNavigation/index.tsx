import { StNavigation, StNavigationLink, StSpanMenu } from "./styles";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

type IProps = {
    MenuItems: string[]
}

const MenuNavigation: React.FC<IProps> = ({ MenuItems }) => {

    const handleIcons = (elm: string): JSX.Element | null => {
        switch(elm.toLowerCase()) {
            case 'dashboard': 
                return <DashboardRoundedIcon />
                break;
            case 'novo registro':
                return <AccountBalanceWalletRoundedIcon /> 
                break;
            case 'entradas':
                return <ArrowUpwardRoundedIcon />
                break;
            case 'saídas': 
                return <ArrowDownwardRoundedIcon />
                break;
            case 'sair': 
                return <ExitToAppRoundedIcon />
                break;   
            default:
                return null                 
        }
    }

    return (
        <StNavigation>
            {
                MenuItems.map((item, index) => (
                    <StNavigationLink key={index}>
                        {handleIcons(item)}
                        <StSpanMenu>{item}</StSpanMenu>
                    </StNavigationLink>
                ))
            }
        </StNavigation>
    )
}

export default MenuNavigation;