import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import NavItem from './NavItem';

const Header = () => {
    const navOptions = [
        {
            name: "Home",
            icon: HomeIcon
        },
        {
            name: "History",
            icon: WorkHistoryIcon
        },
    ];

    return (
        <div className="w-[200px]">
            <div className="relative flex items-center w-fit justify-center">
                <DesignServicesIcon fontSize="large" />
                <span className="font-bold text-[10px] absolute -bottom-[10px]">LOGO</span>
            </div>
            <div className="mt-[3rem]">
                <ul className="flex flex-col gap-[1rem]">
                    {
                        navOptions.map((el) => <NavItem key={el.name} name={el.name} Icon={el.icon} /> )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;