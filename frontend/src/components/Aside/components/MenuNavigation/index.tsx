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

    const handleUrl = (elm: string) => {
        const treatedUrl = elm.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').toLocaleLowerCase();
        const createPath = (elm: string) => {
            
            // tratar url para saidas e entradas
            if(elm.toLocaleLowerCase() === 'entradas' || elm.toLocaleLowerCase() === 'saídas') {
                return `/list/${treatedUrl}`
            }

            return `/${treatedUrl}`
        }

        console.log("createPath", createPath(elm))

        return createPath(treatedUrl);
    }

    return (
        <StNavigation>
            {
                MenuItems.map((item, index) => (
                    <StNavigationLink 
                        key={index}
                        href={`${handleUrl(item)}`}
                    >
                        {handleIcons(item)}
                        <StSpanMenu>{item}</StSpanMenu>
                    </StNavigationLink>
                ))
            }
        </StNavigation>
    )
}

export default MenuNavigation;